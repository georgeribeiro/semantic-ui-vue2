import Grid from './grid.js'
import Form from './form.js'

import Input from '../elements/Input.vue'
import Label from '../elements/Label.vue'

import Modal from '../modules/Modal.vue'

export default {
    mixins: [
        Grid,
        Form,
    ],
    components: {
        'ui-input': Input,
        'ui-label': Label,
        'ui-modal': Modal,
    },
}
