import {getData} from "./dataProviders";
import {Type} from "./field-types";

export let fill = {
    field: function ($field, type) {
        if (type === 'email') {
            $field.val(getData.email);
        } else if (type === 'text') {
            $field.val(getData.text);
        } else if (type === 'phone') {
            $field.val(getData.phone);
        } else if (type === 'name') {
            $field.val(getData.name);
        } else if (type === 'textarea') {
            $field.val(getData.textarea);
        } else if (type === 'number') {
            $field.val(getData.number);
        } else {
            return false
        }

    },

    badField: function ($field, type) {
        if (type === 'phone') {
            $field.val(getData.badPhone)
        } else if (type === 'email') {
            $field.val(getData.badEmail)
        }
    },

    required: function ($this) {
        $this.find('textarea').each(function () {
            let $textarea = $(this);
            if ($textarea.attr('required') !== undefined) {
                fill.field($textarea, 'textarea');
                $textarea.change();
                $textarea.blur();

            }
        });

        $this.find('input').each(function () {

            let $input = $(this);
            let type = Type($input);


            if (type !== 'submit' && $input.is(':visible')) {
                $input.val('');
            }


            if ($input.attr('required') !== undefined && $input.is(':visible')) {
                fill.field($input, type);
                $input.change();
                $input.blur();
            }
        })

    },

    all: function ($this) {

        $this.find('textarea').each(function () {
            let $textarea = $(this);
            fill.field($textarea, 'textarea');
            $textarea.change();
            $textarea.blur();

        });
        $this.find('input').each(function () {

            let $input = $(this);
            let type = Type($input);


            if (type !== 'submit' && $input.is(':visible')) {
                $input.val('');
            }


            if ($input.is(':visible')) {
                fill.field($input, type);
                $input.change();
                $input.blur();

            }
        })


    },

    negative: function ($this) {
        // let $checkbox = $this.find('.checkbox');
        let $phoneBox = $this.find('.phoneBox');
        let $emailBox = $this.find('.emailBox');

        $this.find('textarea').each(function () {
            let $textarea = $(this);
            if ($textarea.attr('required') !== undefined) {
                fill.field($textarea, 'textarea');
                $textarea.change();
                $textarea.blur();

            }
        });

        $this.find('input').each(function () {

            let $input = $(this);
            let type = Type($input);



            if ($input.is(':visible')) {
                if (type === 'phone' && $phoneBox.prop('checked')) {
                    fill.badField($input, type);
                    $input.change();
                    $input.blur();
                } else if (type === 'email' && $emailBox.prop('checked')) {
                    fill.badField($input, type);
                    $input.change();
                    $input.blur();
                } else {
                    fill.field($input, type);
                    $input.change();
                    $input.blur();

                }
            }
        })
    }
};