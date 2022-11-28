
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var e = [],
  t = [];
function n(n, r) {
  if (n && "undefined" != typeof document) {
    var a,
      s = !0 === r.prepend ? "prepend" : "append",
      d = !0 === r.singleTag,
      i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];
    if (d) {
      var u = e.indexOf(i);
      -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
    } else a = c();
    65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
  }
  function c() {
    var e = document.createElement("style");
    if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) {
      e.setAttribute(t[n], r.attributes[t[n]]);
    }
    var a = "prepend" === s ? "afterbegin" : "beforeend";
    return i.insertAdjacentElement(a, e), e;
  }
}

var css = ".h1 {\r\n  color: rgb(32, 122, 39);\r\n  text-align: center;\r\n}\r\nbody {\r\n  background: #000;\r\n}\r\n";
n(css,{});

var img$1 = "data:image/webp;base64,UklGRowKAABXRUJQVlA4IIAKAACQTwCdASrgAQUBPmEwlkekIyIhJLNISIAMCWVu/Fd5jg7+u83N5z+p/sR/Regy4979c35XPmxeL/tP+m/uX5JfPH/F/3T2T/23+M/7L3B/85/SfXz6PPMB/LP7B+zfumf4/9wfcL/y/6N7AH+f/0fra/8T2a/4d/wfYS/jPnz/t38O/7t/tN7WGq2NE817KRxvog7TcrN+SL6dNfv39TJYw+V9E0HssCPIkJpPYh09/IdPfyHT38h09+vDmaxc/fX0tleHqxj7EOnv5Dp7+NEmVp0mr76w+DoAIGi0ricn5FTIkJpPYh09/IdPfxo1pQck6lvRejkk3dtiJCaT2IdPfyHTymdHK2Ts56N+0eAvKx96uAj2M0qWPsQ6e/kOnv1djgxCvh6Sk4eeOju235iITfCQmk9iHT38hH0nCkeY/CMhZFEFZPDHJbR1Pm3ZdHnyfm4R5EhNJ7EOnvIwDTOgeNqMBxdvQUlyQ8wu0DS5TnkJr4erGPsQ6e8niPsP+dwPnDk+R9AvDFhvSEUPKSDnOur7PYh09/IdPfqnXFfJLmQxlwfPAOwhXuEWtmvV6VcwUEeRITSexDkMsJN+MocTSwkxnaIsQb5XajppMvvFcTW2OpA/1IkJpPYh09/IZtleksOJjHyKqgr5nRS4enaN2bOdzdiM2UWS6JJx76CBVY+xDp7+Q6e/Vpj+0aCgfU0kZjsfBwcoT4l0GXojorqLn5r1AJrVjH2IdPfyHSxOhIAPc4Ausf6PDtgfZb1ywrT42Blyv9CHxEhNJ7EOnv5DjOxKhmKgmgsgheAl1pdTEkn17+Q6e/kOnv5Dp7+pQOwn8h09/IdPfyHT38h09/IdPfyHSwAA/v+4cAAT/5M+Yt/e//jEQ1s85igMkYWCFhIwhtI4NoXk+FoP88P/9z+lX/7AL7f//rYT5Q7Qy9f+xyzd1Yaw4w3MG5/t/9PdcMD7zxyHamp8JKVvqk/jSvz1cYepXVV5t/bDeejjLFW5NoTHKJb1YT+Cqn8E+3mNSxDK7cRq/sGU7m5oMocPWfRuJX1yqr99Pq5f+qtzrWfn88kgXLbenkIWrUfnN1yKnU4o+L/+mK+YqHjvB7rbPmBZnjWBEhsAZ2qhtDdiKAxqUsfmkiDfynFbuBQJT+Qjn2ZwPkBpJDgKbcxD7TgtKjhXqcP6b8WzSMQscQsgmasOLHTBgw4zbPNlA96VlmbycZJNQWIKPq1pkoNDSEdTA6tPOGtc8euKQlk9Vd/Ey2weTqOxemladA4cuv8I+zRJoqMNd78Wk5kaN9d2Dnji7pjkp5Bq2Az+WBMgD7X+WE5yQNNO10oFJEx7si4JhWs+HZEW3Mg9A5Uugte8gUK/Ej1PCnxs1xrvEE/A+ZOB7okY+kDPCsp/vapKC6EWdL5Wx3DQQNvgvwBx/Lo5khfN8RKEsYF0+tBpd8S3rWMERhUD9coHNSG4EhXKJpNRM0zGKbwVO5dNlmvhG/el/AIssqjjC/TT5iMfvnbzR/Yo9ewuv/p8GkWpf0E2dMVLLoJOK0nwrb/zORJe1JppyVraTjEFslUGbcTD8Q1NKYg6DE2wV+ksd9on5zDngqnCxD7sU6N2onkivLlDk81F6AxlwlQJzqXmvPiEap7LgpwHK6gYlbqep15nqSm5VHgfjCqo4kp4F7cjHdLVN2q2SANkAB5gnsPv4vJY9NVekap30vguBmvqT5ziSmAAEObUI8CF+8wFOMV8b5KjukM3FTDoeirXRQiAPgi+oP35qCwFXesMNLwQ3oNpwH8PIAKnn4Yfqxl6mt4Y6X/6cbE7k6kqBOHQRf4oWhVwvdGKUScsMxmfUBcqLZUg0Mif+iHLkHbCbsoTu+Ulf72rzzXcBw0lIQlbdY04Ul/Qa3Q8hcSK9KkjE+ElZVL4TMMi3mNiGwCq6jP/N/zcWk9c8vYXoA2etMK0kt7aXURnSlQcjRF3h+3VR+kGJS7qCnc44EWaZBHS6Py5O9/Y/ZE3AqHKFIKu78BZtjhJeIdC8zWU8tD+UEeV/PHEoyLwL+9qB2tiUXyzwAN8ZTrZa2RZIB647HTuW58bI/o+b9zKEbYjV93iyUvmhNkoydHJkhmpi+v14KA3jzD8WWtB1Oy8tX4Gc/qXuIYEiipO++CI3a+x2VegIP6AVdm7tY3+50KqsJcIwWtnbZFk1CknjzfCONqoTc2rhftsNt95Eoo7BcRrzU+5PREeBMe6BW/0/un7z++rlPmFxHAO15GqTryFncLTKpM7iyY1HxgZuajc+L6HPmtLLzeI1tDwCe2jelD8OSAPqIvapy92cpp13wLz8R9i2nWbLwZMfu97wIE7BEJbpcA3cqOg75OYVVyQROVlC1PwpvQNZeeR2pvWspTPEpDjx4YLKTkH+TBVU6pyzV4ro+OXgEjb3qf3mHgpBTUDGMz/VS69tBeQYYwDfQEvxIXc50X2v4Nr39GFj9nb29j/e+dW9yG7ESRKyYtVxEw4pwjQ8dFEcuxf4vzdbqcB9EgYVkIEFbiou8PSI7m4YVrs92XnPToeA9yokl2HUMy4v1bZ+geTjkBOT8mgqHqsgQ4tbgPaUppkXqXgQ922H4Ym72nnsxwdE7UYc/GiYntjpLYrc2KSXx05ZIrgXue0HbzrtZATfEGdyiS/EnrzdR+rVVbnNp5evcEVJPEb408uYcx37jnf9Mr/+osSqXfd1ds475kmhMA4Qnkr4nCZBnTMmLDV/AkH1aOUcS63e3mGY4Y0cgU2pe/fTmnrUNSGOVOvwhJOD5SCtkBQiq1XLhuPK2ewN1s3QlV5MK6gaKtnAwtKT2/iVKfx07O4iDZECsb8UUuCUCeR0v5XqHBOVGePAgfD5BSMedLWh48nvL69r/8wXOLgiGbV3ebbBDMLohjGABGpWC2YZwIz2iZNJGIuy8Q/WGs4daMU5+RSP2U+F5sqaePVnQaw7QCv1vj6xczUusfRof2Q+ycM1UdyoR3SDApQ3lP0WYC0KrsIIwbE1bcLwdb+FboI1N/KrXoXjM4iBHJb4IBvtjNVtECnmzW01I3zsfy4tI4qNwWQj2wqQpFcdOMjLFSeC0AyTKA8mW8PFg28CkXCtQtmhtbm5OZfNbVY9Z/7QIkF5skH4sTFALOKTQRitzCUi8jYOO9zZ0YpKHs2KarR9R8me1xQVVfaqHmhSg5vkCp2KcOzzFFDamMKR1EN2JU4GA7oj8tad27ANk0jej5fi2ZQ4Qg1+77HjJ3QJfnL+8k6guXQpoaYb9ROuU9xNRb4rGGq18KQNOd3KGvqWddY1UGcKK25VGN/DtIJPJtpfOck0xBrnABErAVppfY4JQX+1nNQ3p10hnFmp/dA7xL0NOt+Kdb8cZbYWkR0C1StLMxSYwewlPUFZ+9Jge7hXJtiXk3YvHZq5lfIjMZwVgnYZEOy0zDQI1JJZw7ru9BqdJHlyhF1gN3ijarK79RzT8GFuQEtAPjsjQlwGrlFdViibbXS/r+he7MqQMPKNYuw97KWkCqposcwnW1G+KUTdNu58qXedSdIxPEFew995hDUXZ4GNburB9ULu7jva0/A3DRgj5k3VTUAAAAAAAAAAAA=";

console.log('Hello World!');
var h1 = document.createElement('h1');
h1.textContent = 'I love JavaScript';
h1.classList.add('h1');
h1.classList.add('center');
document.body.append(h1);
var img = document.createElement('img');
img.src = img$1;
img.classList.add('center');
document.body.append(img);
