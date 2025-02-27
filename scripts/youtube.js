let videoHTML = "";

videos.forEach((param) => {
  videoHTML += `
   <div class="Video-preview">
        <div class="Video">
          <img class="Image" src="${param.image}" />
          <div class="Video-time">${param.time}</div>
        </div>
        <div class="Video-info-grid">
          <div class="Channel-picture">
            <img class="Profile-pic" src="${param.profile_pic}" />
          </div>
          <div class="Video-info">
            <p class="Video-title">
              ${param.title}
            </p>
            <p class="Video-author">${param.author}</p>
            <p class="Video-stats">${param.statistics}</p>
          </div>
        </div>
      </div>
  `;
});

console.log(videoHTML);

document.querySelector(".js-video-grid").innerHTML = videoHTML;
