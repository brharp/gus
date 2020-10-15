MediaElementPlayer.prototype.buildtranscript = function (player, controls, layers, media) {
    if (player.tracks.length > 0) {

        let transcript = document.createElement('div');
        transcript.classList.add('mejs__button', 'mejs__transcript');
        transcript.setAttribute('title', 'Download Transcript');
        transcript.setAttribute('aria-label', 'Download Transcript');
        transcript.setAttribute('tabindex', '0');
        transcript.style.position = 'relative';

        let icon = document.createElement('i');
        icon.classList.add('download-transcript');
        transcript.appendChild(icon);

        let tracksContainer = document.createElement('div');
        tracksContainer.style.position = 'absolute';
        tracksContainer.style.right = '0';
        tracksContainer.style.bottom = '100%';
        tracksContainer.classList.add('mejs__transcript-tracks-container');

        for (const track of player.tracks) {
            let trackURL = document.createElement('a');
            trackURL.setAttribute('href', track.src);
            trackURL.setAttribute('download', '');
            trackURL.textContent = track.label + ' Transcript';
            trackURL.classList.add('mejs__transcript-track-url');

            tracksContainer.appendChild(trackURL);
        }

        transcript.addEventListener('mouseenter', function () {
            tracksContainer.style.display = 'block';
        });

        transcript.addEventListener('mouseleave', function () {
            tracksContainer.style.display = '';
        });

        transcript.addEventListener('focus', function () {
            tracksContainer.style.display = 'block';
        });

        transcript.addEventListener('focusout', function (e) {
            if (e.relatedTarget) {
                if (!this.contains(e.relatedTarget)) {
                    tracksContainer.style.display = '';
                }
            } else {
                tracksContainer.style.display = '';
            }

        });

        transcript.appendChild(tracksContainer);
        controls.appendChild(transcript);
    }
};