import {fill} from './modules/filler'
import {check} from "./modules/checker";

(function ($) {

    // let screenWidth = $(window).width();
    let defaults = {
        // дефолтные опции

        appPath: 'https://shejder.github.io/build/js',

        template: function () {
            return `
                <div class="test-wrap" >
                    <div class="top-wrapper">
                        <select class="fixture-type">
                            <option value="">Как заполнить поля?</option>   
                            <option value="required">Только обязательные</option>  
                            <option value="all">Все доступные</option>  
                        </select>
                        <div class="switcher close"><img src="`+defaults.appPath+`/img/arrow-down-left.svg" alt="open" title="Click to open"></div>                      
                    </div>
                    <button type="button">Заполнить</button> 
                </div>`
        }
    };
    //


    $('form').each(function () {

        let $this = $(this);


        //проверяем наличие виджета на странице
        if ($this.find('.test-wrap')) {
            $this.find('.test-wrap').remove();
        }

        //добавляем виджет
        if (check.action($this) !== 'isSearch' && $this.find('input').length > 1) {
            $this.append(defaults.template);
        }
        $this.css({
            position: 'relative'
        });


        let $widget = $this.find('.test-wrap');
        let $switcher = $widget.find('.switcher');
        let val;

        $switcher.on('click',function () {
            if ($switcher.hasClass('close')){
                $switcher.removeClass('close');

                $widget.css({
                    width: 'auto',
                    height: 'auto',
                    left: /*position*/'57%',
                });
                $switcher.css({
                    margin: 'auto 10px'

                });
                if($widget.find('.fixture-type').val() !== ''){
                    $widget.find('button').toggle();
                }

                $switcher.find('img').attr('src', defaults.appPath+'/img/arrow-up-right.svg');
                $switcher.find('img').attr('title', 'Click to close');
                $switcher.find('img').attr('alt', 'close');
                $widget.find('select').toggle();


                $switcher.addClass('open');
            } else if ($switcher.hasClass('open')) {
                $switcher.removeClass('open');
                if($widget.find('.fixture-type').val() !== ''){
                    $widget.find('button').toggle();
                }

                $widget.css({
                    width: '32px',
                    height: '32px',
                    left: /*position*/'94%',

                });
                $switcher.css({
                    margin: 'auto'

                });




                $switcher.find('img').attr('src', defaults.appPath+'/img/arrow-down-left.svg');
                $switcher.find('img').attr('title', 'Click to open');
                $switcher.find('img').attr('alt', 'open');


                $widget.find('select').toggle();

                $switcher.addClass('close');

            }

        });

        $widget.find('.fixture-type').on('change', function () {

            let $select = $(this);
            val = $select.val();
            $widget.find('button').toggle();


        });


        $widget.find('button').on('click', function () {
            let $button = $(this);
            $button.text('Перезаполнить');
            if (val === 'required') {

                fill.required($this);

            } else if (val === 'all') {

                fill.all($this);

            }
        });



        //положение виджета
        // let position;
        // if ($this.width() === screenWidth) {
        //      position = '85%';
        // } else {
        //     position = '110%';
        // }


        //стили виджета
        $widget.css({
            position: 'absolute',
            top: 0,
            left: /*position*/'94%',
            backgroundColor: '#f5f5f5',
            opacity: 0.9,
            border: '2px solid black',
            borderRadius: '2px',
            zIndex: 999999,
            width: '32px',
            height: '32px'

        });

        $widget.find('select').css({
            margin: '10px',
            width: 'auto',
            padding: '4px',
            height: 'auto',
            display: 'none'

        });

        $widget.find('button').css({
            margin: '10px 20px',
            padding: '4px',
            display: 'none'
        });

        $widget.find('.switcher').css({
            padding: '4px',
            width: '28px',
            height: '28px',
            display: 'block',
            border: '1px solid black'
        });

        $widget.find('.top-wrapper').css({
            display: 'flex',
            verticalAlign: 'baseline',
            justifyContent: 'space-around',
        });


    });
})(jQuery);
