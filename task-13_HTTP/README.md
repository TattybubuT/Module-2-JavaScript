# Протокол HTTP 
<p> Каждый раз, когда вы посещаете страницу в интернете, ваш компьютер использует протокол передачи гипертекста (HTTP) для загрузки этой страницы. <b>HTTP — это набор правил для передачи файлов: текста, изображений, звука, видео и других мультимедиа.</b> HTTP работает поверх набора протоколов TCP/IP, которые составляют основу интернета.</p>

### Содержание:
<details>
  <summary><b>Составляющие HTTP</b></summary>
  <p>В HTTP-протоколе есть две разные роли: сервер и клиент. Запрос всегда инициирует клиент, а сервер на него отвечает. Клиентом может быть как браузер, так и, к примеру, поисковый робот, который просматривает страницы в интернете и индексирует их согласно релевантности ключевого запроса. HTTP основан на тексте — сообщения между клиентом и сервером по сути представляют собой фрагменты текста, хотя в теле сообщения могут быть другие элементы: видео, фото, аудио и т.д.</p>

  <p>Каждый отдельный запрос отправляется на сервер, который обрабатывает его и предоставляет ответ. Между клиентом и сервером существует множество объектов, которые называются прокси-серверами. Они  обеспечивают различные уровни функциональности, безопасности и конфиденциальности в зависимости от ваших потребностей или политики компании.</p>
  <img src="assets/image1-12.png">

   <b>Итак, мы выяснили, что HTTP содержит три основных элемента:</b>
   <ul>
     <li>Клиент</li>
     <li>Сервер</li>
     <li>Прокси-сервер</li>
   </ul>
   Рассмотрим подробнее, что это такое и как они работают.
   <hr>
</details>

<details>
  <summary><b>Клиент</b></summary>
  <b>— это любой инструмент, который действует от имени пользователя.</b> В основном эту роль выполняет веб-браузер, но помимо браузера это быть программы, используемые инженерами или веб-разработчиками для отладки своих приложений. Клиент всегда инициирует запрос, это никогда не делает сервер.
  <hr>
</details>

<details>
  <summary><b>Веб-сервер</b></summary>
  <b>На другой стороне канала связи находится сервер, который обслуживает документ по запросу клиента.</b> Хотя для пользователя сервер выглядит как одна виртуальная машина, на самом деле это может быть набор серверов, разделяющих нагрузку. С другой стороны, несколько серверов могут быть расположены на одной и той же машине. При HTTP/1.1 и заголовке Host они могут даже использовать один и тот же IP-адрес.
  <hr>
</details>

<details>
  <summary><b>Прокси</b></summary>
  <b>— это серверы, компьютеры или другие машины уровня приложений, которые находятся между клиентским устройством и непосредственно сервером.</b> Они ретранслируют HTTP-запросы и ответы. Обычно для каждого взаимодействия клиент-сервер используется один или несколько прокси.
</details>

<details>
  <summary><b>Как работает HTTP-протокол</b></summary>
  <b>Шаг первый:</b> направляем URL в браузер.

  <b>Шаг второй:</b> браузер ищет нужный IP-адрес.

  <b>Шаг третий:</b> браузер посылает HTTP-запрос.

  <b>Шаг четвертый:</b> сервер отправляет HTTP-ответ.
</details>
<hr>
<p>Полезные ссылки:</p>

https://highload.today/protokol-http/

https://habr.com/ru/post/50147/

https://ruseller.com/lessons.php?id=1726&rub=28
