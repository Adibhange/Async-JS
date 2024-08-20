const handleCallback = () => {
	const msg = document.getElementById("msg");
	const postData = document.getElementById("data");

	msg.innerText = "Executing callback...";

	// Used setTimeout to delay the execution of the callback by 5 seconds
	setTimeout(() => {
		// Fetch data from the API
		fetch("https://dummyjson.com/posts")
			.then((response) => response.json())
			.then((data) => {
				// Updated the message to indicate the callback has been executed
				msg.innerText = "Callback executed after 5 seconds.";

				const postsList = `<ul class="list-disc list-inside">
						                ${data.posts.map((post) => `<li>${post.title}</li>`).join("")}
					               </ul>`;

				postData.innerHTML = postsList;
				postData.classList.remove("hidden");
			})
			.catch((error) => {
				msg.textContent =
					"An error occurred while fetching data: " + error.message;

				// Add error style as this is an error so
				msg.classList.remove("text-slate-50");
				msg.classList.add("text-red-500");
			});
	}, 5000);
};

// Added event listener to the button
document
	.getElementById("callbackBtn")
	.addEventListener("click", handleCallback);
