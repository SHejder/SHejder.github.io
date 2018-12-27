import {getData} from "./dataProviders";
import {check} from "./checker";

export let fill = {
    field: function ($input, $type, $name) {
        if ($type === 'isEmail' || $name === 'isEmail') {
            $input.val(getData.email());
        } else if ($type === 'isText' && $name !== 'isPhone' && $type !== 'isEmail' && $name !== 'isName') {
            $input.val('test');
        } else if ($name === 'isPhone') {
            console.log('yep')
            $input.val('89101956231');
        } else if ($name === 'isName') {
            $input.val(getData.name());
        } else {
            return false
        }

    },

    form: function ($select, $this) {


        if ($select.val() == 'required') {
            $this.find('input').each(function () {

                let $input = $(this);

                $input.val('');
                let $type = check.type($input);
                let $name = check.name($input);
                if ($input.attr('required') !== undefined && $type !== 'isHidden') {
                    fill.field($input, $type, $name);
                }
            })
        }

    }
};