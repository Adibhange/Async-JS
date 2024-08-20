document
	.getElementById("async-awaitBtn")
	.addEventListener("click", async () => {
		const msg = document.getElementById("msg");
		msg.innerText = "Loading....";

		const postData = document.getElementById("data");

		try {
			const response = await fetch("https://dummyjson.com/posts");

			if (response) {
				msg.innerText = "Data fetched successfully using Async-Await";
			}
			const data = await response.json();
			const postsList = `<ul class="list-disc list-inside">
						            ${data.posts.map((post) => `<li>${post.title}</li>`).join("")}
					           </ul>`;

			postData.innerHTML = postsList;
			postData.classList.remove("hidden");
		} catch (error) {
			msg.innerText = `An error occured ${error.message}`;
			msg.classList.remove("text-[#292e1e]");
			msg.classList.add("text-[#6c0a0a]");
		}
	});
