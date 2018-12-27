import {fill} from './modules/filler'
import {check} from "./modules/checker";

(function ($) {

    var screenWidth = $(window).width();
    var defaults = {
        // дефолтные опции
        template: function () {
            return `
                <div class="test-wrap" >                      
                    <select class="fixture-type">
                        <option value="">Как заполнить поля?</option>   
                        <option value="required">Только обязательные</option>  
                    </select>
                    <button type="button">Перезаполнить</button> 
                </div>`
        }
    };

    $('form').each(function () {

        let position = '110%';
        let $this = $(this);

        $this.css('position', 'relative');
        // $this.find('input')
        if ($this.find('.test-wrap')) {
            $this.find('.test-wrap').remove();
        }
        if (check.action($this) !== 'isSearch' && check.type($this.find('input')) !== 'isHidden') {
            $this.append(defaults.template);
        }


        let $widget = $this.find('.test-wrap');

        let val;

        $widget.find('.fixture-type').on('change', function () {

            let $select = $(this);
            val = $select.val();

        });


        $widget.find('button').on('click', function () {
            if (val === 'required') {

                fill.form($this);

            }
        });


        if ($this.width() === screenWidth) {
            position = '85%';
        }

        $widget.css({
            position: 'absolute',
            top: 0,
            left: position,
            backgroundColor: '#f5f5f5',
            opacity: 0.8,
            border: '2px solid black',
            borderRadius: '2px',
            zIndex: 999999
        });

        $widget.find('select').css({
            margin: '10px',
            width: 'auto',
            padding: '4px',
            height: 'auto'
        });

        $widget.find('button').css({
            margin: '10px auto',
            padding: '4px',
            width: 'auto',
            height: 'auto',
            display: 'block'
        });


    });
})(jQuery);
