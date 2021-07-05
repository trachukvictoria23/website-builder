<template>
	<form class="login" @submit.prevent="submit">
		<button class="login__register" @click.prevent="$router.go(-1)">
			{{ $t("back") }}
		</button>
		<div class="login__item">
			<label for="email">*{{ $t("email") }}:</label>
			<input
				class="app-input"
				name="email"
				v-model="email"
				ref="1"
				:class="{ 'input-error': $v.email.$error }"
				@click="focusedInput = 1"
			/>
		</div>
		<div class="login__item">
			<label for="password">*{{ $t("password") }}:</label>
			<input
				class="app-input"
				name="password"
				v-model="password"
				type="password"
				ref="2"
				:class="{ 'input-error': $v.password.$error }"
				@click="focusedInput = 2"
			/>
		</div>
		<div class="login__item">
			<label for="confirm-password">*{{ $t("confirmPassword") }}:</label>
			<input
				class="app-input"
				name="confirm-password"
				v-model="confirmPassword"
				type="password"
				ref="3"
				:class="{ 'input-error': $v.confirmPassword.$error }"
				@click="focusedInput = 3"
			/>
		</div>

		<div class="login__item">
			<label for="phone">*{{ $t("phone") }}:</label>
			<input
				class="app-input"
				name="phone"
				v-model="phone"
				v-mask="phoneMask"
				masked="true"
				ref="4"
				placeholder="+38(XXX)XXX-XX-XX"
				:class="{ 'input-error': $v.phone.$error }"
				@click="focusedInput = 4"
			/>
		</div>

		<button class="submit-button mt-20">
			{{ $t("register") }}
		</button>
	</form>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import focusMixin from "@/mixins/focusMixin";
import { db } from "../main";
import { uuid } from "vue-uuid";

const UserService = db.collection("users");

export default {
	data() {
		return {
			email: "",
			password: "",
			confirmPassword: "",
			phone: "",
			phoneMask: "+38(###)-###-##-##"
		};
	},
	mixins: [focusMixin],
	validations: {
		email: {
			required
		},
		password: {
			required
		},
		confirmPassword: {
			required
		},
		phone: {
			required
		}
	},
	methods: {
		submit() {
			this.$v.$touch();
			if (this.$v.$invalid) return alert("Please fill important fields");
			if (this.password !== this.confirmPassword)
				return alert("Password mismatch");
			const new_user = {
				email: this.email,
				password: this.password,
				phone: this.phone,
				id: uuid.v4()
			};

			UserService.doc(this.email)
				.set(new_user)
				.then(res => {
					delete new_user.password;
					localStorage.setItem("email", this.email);
					this.$store.commit("setUserInfo", new_user);
					this.$router.push({ name: "Home" });
				})
				.catch(error => {
					alert("Error adding user: ", error);
				});
		}
	}
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/login.scss";
label {
	margin-left: -10px;
}
.login {
	&__item {
		margin-top: 20px;
	}
}
</style>
