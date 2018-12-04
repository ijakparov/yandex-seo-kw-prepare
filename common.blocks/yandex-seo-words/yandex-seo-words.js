modules.define('yandex-seo-words', ['i-bem-dom','textarea','button'], function(provide, bemDom, Textarea, Button) {
    provide(bemDom.declBlock(this.name,
        {
            onSetMod : {
                'js' : {
                    'inited': function() {
                        console.log(this.params);
                        this._sourse = this._elem('sourse').findChildBlock(Textarea);
                        this._result = this._elem('result').findChildBlock(Textarea);
                    }
                }
            },
            _onButtonClick: function (e) {
                if (e.bemTarget.params.action && e.bemTarget.params.args && this[e.bemTarget.params.action]) {
                    this[e.bemTarget.params.action].apply(this, e.bemTarget.params.args);
                } else if (e.bemTarget.params.action && this[e.bemTarget.params.action]) {
                    this[e.bemTarget.params.action]();
                }
            },
            _makeit: function(){
                var data = this._sourse.getVal();
                var result = [];
                if(data){

                    data = data.replace(/\r\n/g,"\n").split("\n");
                    console.log(data);
                    data && data.forEach(function(item){
                        item = item.trim().replace(/ +(?= )/g,'');
                        result.push(item);
                        result.push('"'+item+'"');
                        
                        item = item.split(" ");
                        result.push('"!'+item.join(' !')+'"');
                    });
                    this._result.setVal(result.join('\r\n'));
                }
                else{
                    this._result.setVal('');
                }
            }
        },
        {
            lazyInit: true,
            onInit: function(){
                this._events(Button).on('click',this.prototype._onButtonClick);
            }
        })
    );
    });