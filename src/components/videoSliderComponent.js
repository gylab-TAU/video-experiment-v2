import VideoSliderResponsePlugin from "@jspsych/plugin-video-slider-response";

class videoSliderComponent {

    static getTrial(videos, start, stop, id) {
        let trial = {
            type: VideoSliderResponsePlugin,
            stimulus: videos,
            prompt: '<p> some question </p>',
            min: 1,
            max: 10,
            labels: [1,2,3,4,5,6,7,8,9,10].reverse(),
            slider_start: 6,
            require_movement: true,
            start: start,
            stop: stop,
            response_allowed_while_playing: false,
            hide_slider_while_video_plays: true,
            width: window.screen.availWidth * 0.6,
            height: window.screen.availHeight * 0.6,
            on_finish: function(data) {
                data.start = start;
                data.stop = stop;
                data.id = id;
            }
        };

        return trial;
    }
}

export default videoSliderComponent;