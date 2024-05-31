import Button from "primevue/button"
import CascadeSelect from 'primevue/cascadeselect';
import Dialog from 'primevue/dialog';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Chip from 'primevue/Chip';
import AnimateOnScroll from 'primevue/animateonscroll';

const obj = {
    Button,
    CascadeSelect,
    Dialog,
    Avatar,
    AvatarGroup,
    Chip,
}

export default {
    install: (app) => {
        for (const key in obj) {
            app.component(key, obj[key])
        }
        // app.directive('animateonscroll', AnimateOnScroll);
        // ...
    }
}



// export default {
//     Button,
//     CascadeSelect,
//     Dialog,
//     Avatar,
//     AvatarGroup,
// }