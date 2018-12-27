import {getData} from "./dataProviders";
import {Type} from "./field-types";

export let fill = {
    field: function ($field, type) {
        if (type === '') {
            type = 'textarea';
        }
        if (type === 'email') {
            $field.val(getData.email);
        } else if (type === 'text') {
            $field.val('test');
        } else if (type === 'phone') {
            $field.val(getData.phone);
        } else if (type === 'name') {
            $field.val(getData.name);
        } else if (type === 'textarea') {
            $field.val('This is the test! ');
        } else {
            return false
        }

    },

    form: function ($this) {
        $this.find('textarea').each(function () {
            let $textarea = $(this);
            if ($textarea.attr('required') !== undefined) {
                fill.field($textarea);
            }
        });

        $this.find('input').each(function () {

            let $input = $(this);
            let type = Type($input);


            if (type !== 'submit') {
                $input.val('');
            }


            if ($input.attr('required') !== undefined && type !== 'hidden') {
                fill.field($input, type);
            }
        })

    }
};