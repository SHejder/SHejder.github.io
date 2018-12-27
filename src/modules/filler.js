import {getData} from "./dataProviders";
import {Type} from "./field-types";

export let fill = {
    field: function ($input, type) {
        if (type === 'email') {
            $input.val(getData.email);
        } else if (type === 'text') {
            $input.val('test');
        } else if (type === 'phone') {
            $input.val(getData.phone);
        } else if (type === 'name') {
            $input.val(getData.name);
        } else {
            return false
        }

    },

    form: function ($this) {


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