(function ($) {
    //создаем панель управления
    var screenWidth = $(window).width();
    var defaults = {
        // дефолтные опции
        template: function () {
            return `
                <div class="test-wrap" >                      
                    <select>
                        <option value="">Как заполнить поля?</option>   
                        <option value="required">Только обязательные</option>   
                    </select>
                </div>`
        }
    };

    $('form').each(function () {

        var position = '110%';
        var $this = $(this);

        $this.css('position', 'relative');
        $this.find('input')
        $this.append(defaults.template);

        if ($this.width() == screenWidth) {
            position = '85%';
        }

        $this.find('.test-wrap').css({
            position: 'absolute',
            top: 0,
            left: position,
            backgroundColor: '#f5f5f5',
            opacity: 0.8,
            border: '2px solid black',
            borderRadius: '2px'
        });

        $this.find('select').css({
            margin: '10px',
            width: 'auto',
            padding: '4px',
            height: 'auto'
        });

        $this.find('select').on('change', function () {

            let $select = $(this);

            fillThisForm($select, $this);

        });
    });


    function fillThisForm($select, $this) {


        if ($select.val() == 'required') {
            $this.find('input').each(function () {

                let $input = $(this);

                $input.val('');
                let $type = check.type($input);
                let $name = check.name($input);
                if ($input.attr('required') !== undefined && $type !== 'isHidden') {
                    fieldFill($input, $type, $name);
                }
            })
        }

    }


    var check = {
        name: function ($input) {
            let $name = $input.attr('name');
            if ($name !== undefined) {
                if (~$name.indexOf('phone')) {
                    return 'isPhone'
                }  else if (~$name.indexOf('name')) {
                    return 'isName'
                } else if (~$name.indexOf('email')) {
                    return 'isEmail'
                } else {
                    return false
                }
            } else {
                return false
            }

        },

        action: function($form) {
              let action = $form.attr('action');
              if (~action.indexOf('search')) {
                  return 'isSearch'
              } else {
                  return false
              }
        },

        type: function ($input) {
            let $type = $input.attr('type');
            if ($type === 'hidden') {
                return 'isHidden'
            } else if ($type === 'email') {
                return 'isEmail'
            } else if ($type === 'text') {
                return 'isText'
            } else if ($type === 'number') {
                return 'isNumber'
            } else if ($type === 'phone') {
                return 'isPhone'
            } else {
                return false
            }
        }


    };


    function fieldFill($input, $type, $name) {
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

    }

    var getData = {
        name: function () {
            let arr = ['Иван', 'Стенпан', 'Сергей'];
            return arr[getData.randomInt(arr.length - 1)]

        },

        email: function () {
            let arr = ['test@test.ru', 'darvin@yandex.ru', 'darvin@gmail.com', 'darvin@bk.ru'];

            return arr[getData.randomInt(arr.length - 1)]
        },

        randomInt: function (max) {
            let min = 0;
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    };


})(jQuery);
