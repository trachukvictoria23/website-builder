<template>
	<div>
		<label for="height">
			{{ $t("heading") }}
		</label>
		<div>
			<textarea
				name="heading"
				maxLength="128"
				class="sidebar__textarea"
				v-model="heading"
				@blur="setNewHeading"
			/>
		</div>
	</div>
</template>
