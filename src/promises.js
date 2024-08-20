document.getElementById("promiseBtn").addEventListener("click", () => {
	const msg = document.getElementById("msg");
	const postData = document.getElementById("data");

	msg.innerText = "Loading....";

	const handlePromise = new Promise((resolve, reject) => {
		// If promise takes more than 5s to fetch
		const timeOut = setTimeout(() => {
			reject("Opertaion timed out.");
		}, 5000);

		fetch("https://dummyjson.com/posts")
			.then((response) => response.json())
			.then((data) => {
				clearTimeout(timeOut); // Clearing timeout if data is fetched successfully
				resolve(data.posts);
			})
			.catch((err) => {
				clearTimeout(timeOut);
				reject(err.message);
			});
	});

	handlePromise
		.then((posts) => {
			msg.innerText = "Fetched API through promise..";

			const postsList = `<ul class="list-disc list-inside">
						        ${posts.map((post) => `<li>${post.title}</li>`).join("")}
					       </ul>`;

			postData.innerHTML = postsList;
			postData.classList.remove("hidden");
		})
		.catch((err) => {
			msg.innerText = err.message;
			msg.classList.remove("text-slate-50");
			msg.classList.add("text-red-500");
		});
});
