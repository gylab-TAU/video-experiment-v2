import VideoSliderResponsePlugin from "@jspsych/plugin-video-slider-response";

class videoSliderComponent {

    static getTrial(videos, start, stop, id) {
        let trial = {
            type: VideoSliderResponsePlugin,
            stimulus: videos,
            prompt: '<p> עד כמה הדמות רלוונטית לדעתך להמשך העלילה?</p>',
            min: 1,
            max: 100,
            labels: ["רלוונטית מאוד", "לא רלוונטית כלל"],
            slider_start: 50.5,
            require_movement: true,
            start: start,
            stop: stop,
            response_allowed_while_playing: false,
            hide_slider_while_playing: true,
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