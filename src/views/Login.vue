<template>
	<form class="login" @submit.prevent="submit">
		<div class="login__item">
			<label for="email">*{{ $t('email') }}:</label>
			<input
				name="email"
				ref="1"
				v-model="email"
				:class="{ 'input-error': $v.email.$error }"
				@click="focusedInput = 1"
			/>
		</div>
		<div class="login__item">
			<label for="password">*{{ $t('password') }}:</label>
			<input
				name="password"
				ref="2"
				v-model="password"
				type="password"
				:class="{ 'input-error': $v.password.$error }"
				@click="focusedInput = 2"
			/>
		</div>

		<button class="login__submit">{{ $t('logIn') }}</button>
		<button class="login__register" @click.prevent="registration">
			{{ $t('register') }}
		</button>
	</form>
</template>

<script>
	import { required, minLength } from 'vuelidate/lib/validators';
	import focusMixin from '@/mixins/focusMixin';

	export default {
		mixins: [focusMixin],
		data() {
			return {
				email: '',
				password: '',
			};
		},
		validations: {
			email: {
				required,
			},
			password: {
				required,
			},
		},
		methods: {
			submit() {
				this.$v.$touch();
				if (this.$v.$invalid) return;
				this.$router.push({ name: 'Home' });
			},
			registration() {
				this.$router.push({ name: 'Registration' });
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import '~@/assets/style/login.scss';
</style>
