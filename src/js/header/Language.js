export class Language {
  constructor() {
    this.defaultLanguage = 'En';
    this.currentLanguage = this.getCurrentLanguage();
  }

  init() {
    document.querySelector('.language-list').addEventListener('click', this.clickHandler);
    this.displayCheckedLanguage();
  }

  getCurrentLanguage(){
    const currentLanguage = localStorage.getItem('currentLanguage')
    const supportedLanguageList = ['En','Be','Uk','Ru']
    const isNotSupportedLanguage = !supportedLanguageList.includes(currentLanguage);
    if (isNotSupportedLanguage){
      localStorage.setItem('currentLanguage', this.defaultLanguage)
      return this.defaultLanguage;
    } else {
      return currentLanguage;
    }
  }

  clickHandler(e) {
    const currentElement = e.target;
    const allElements = document.querySelectorAll('.language-list__item-link');
    allElements.forEach((el)=>el.classList.remove('active'))
    currentElement.classList.add('active');
    this.currentLanguage = currentElement.dataset.language;
    const oldLanguage = localStorage.getItem("currentLanguage");
    localStorage.setItem("currentLanguage", this.currentLanguage);
    const newLanguage = localStorage.getItem("currentLanguage");

    const isOldLanguage = oldLanguage == newLanguage
    if (isOldLanguage){
      console.warn('! you click on old langeage !, Please select other language')
      return;
    }
    Language.changeLanguage();
  }

  static changeLanguage(){
    return console.log('меняем язык')
  }

  displayCheckedLanguage(){
    const element = document.querySelector(`[data-language="${this.currentLanguage}"]`);
    element.classList.add('active');
  }
}
