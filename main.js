
    const menuNav = document.querySelector('.menu_nav');

    function menuBar(x) {
        x.classList.toggle("change");
        menuNav.classList.toggle('menu_btn_active');
    
    }

    const testRequest = document.querySelector('.request');
    const getRequest = document.querySelector('.get-request');
    const popUp = document.querySelector('.popups__inner');
    const closePopup = document.querySelector('.close__popup');

    testRequest.addEventListener('click', addPopUp);
    closePopup.addEventListener('click', removePopUp);

    getRequest.addEventListener('click', addPopUp);
    closePopup.addEventListener('click', removePopUp);

    function addPopUp() {
        popUp.classList.add('active');
    }

    function removePopUp() {
        popUp.classList.remove('active');
    }

   const form = document.querySelector('.js-form');   
   const TOKEN = "5596693553:AAFqaBrdRceNWcEJm4SsF7JRAQNPPvyeKCg"
   const CHAT_ID = "-1001861221179"
   const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`


   form.addEventListener('submit', function (e) {
    e.preventDefault()
        let message = `<b>Заявка с сайта</b>\n`
            message += `<b>Имя: </b> ${this.name.value}\n`;
            message += `<b>Фамилия: </b> ${this.lastname.value}\n`;
            message += `<b>Телефон: </b> ${this.phone.value}`;

       
        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
         })

         .then((res) => {
            this.name.value = '';
            this.lastname.value = '';
            this.phone.value = '';
         })
         .catch((err) => {
            console.warn(err)
         })
         .finally(() => {
            alert('Сообщение отправлено ожидайте звонка')
            console.log('Сообщение доставлено');
         })   
    })
