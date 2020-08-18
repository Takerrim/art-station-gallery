<script>
	const promise = getImages()
	async function getImages() {
		const res = await fetch('http://localhost:3000/all-images')
		return await res.json()
	}

	function onClick(url) {
		location.href = url
	}
</script>

<main>
	{#await promise}
		waiting
		{:then data}
		<div class="images-wrapper">
			{#each data as {smaller_square_cover_url, title, user, url}}
				<div class="img-container">
					<a class="info" href={url} target="_blank">
						<h5>{user.full_name}</h5>
						<img class="avatar" src={user.medium_avatar_url} alt={title}>
					</a>
					<img src={smaller_square_cover_url} alt={title}>
				</div>
			{/each}
		</div>
	{/await}
</main>

<style>
.images-wrapper {
	display: grid;
	width: auto;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 12px;
}

.img-container {
	position: relative;
}

.img-container:hover .info{
	opacity: 1;
}

.info {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	opacity: 0;
	transition: .25s;
	background-color: rgba(0, 0, 0, 0.6);
	text-decoration: none;
}

h5 {
	color: #FFFFFF;
}

img {
	width: 100%;
}

.avatar {
	width: 72px;
	height: 72px;
	border-radius: 50%;
}
</style>
