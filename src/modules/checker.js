export let check = {

    name: function ($input) {
        let name = $input.attr('name').toLowerCase();
        if (name !== undefined) {
            if (~name.indexOf('phone')) {
                return 'isPhone'
            } else if (~name.indexOf('name')) {
                return 'isName'
            } else if (~name.indexOf('email')) {
                return 'isEmail'
            } else {
                return false
            }
        } else {
            return false
        }

    },

    action: function ($form) {
        if ($form.attr('action') !== undefined){
            let action = $form.attr('action');
            if (~action.indexOf('search')) {
                return 'isSearch'
            } else {
                return false
            }
        }
    },

    type: function ($input) {
        let type = $input.attr('type');
        if  (type === 'email') {
            return 'isEmail'
        } else if (type === 'text') {
            return 'isText'
        } else if (type === 'number') {
            return type
        } else if (type === 'phone') {
            return 'isPhone'
        } else if (type === 'submit') {
            return type
        }else if (type === 'checkbox') {
            return type
        } else {
            return false
        }
    }

};
