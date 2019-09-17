function jQuery (selector, context = document){
	this.elements = Array.from(context.querySelectorAll(selector));
	return this
}
jQuery.prototype.each = function (fn){
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}
jQuery.prototype.click = function(fn){
	this.each(element => element.addEventListener('click', fn))
	return this
}
jQuery.prototype.remove = function(){
	this.each(element => element.remove())
  return this;
}

jQuery.prototype.hide = function(){
	this.each(element => element.style.display = 'none')
  return this;
}

jQuery.prototype.show = function(){
	this.each(element => element.style.display = '')
  return this;
}
jQuery.prototype.class = function(name){
    this.each(element => element.className = name)
  return this;
}
jQuery.prototype.text = function(newText = null) {
    // без параметров - вернёт список из innerText для каждого элемента
    if (newText === null) { 
        textCollection = [];
        this.each(element => textCollection.push(element.innerText));
        return textCollection;
    }
    // при наличии аргумента - установит его всем в поле innerText
    this.each(element => element.innerText = newText);
    return this;
}
jQuery.prototype.html = function(newHtml = null) {
    // по аналогии jQuery.prototype.text
    if (newHtml === null) { 
        htmlCollection = [];
        this.each(element => htmlCollection.push(element.innerHTML));
        return htmlCollection; 
    }
    this.each(element => element.innerHTML = newHtml);
    return this;
}
const $ = (e) => new jQuery(e);

$('button').click(e => console.log(e.target))