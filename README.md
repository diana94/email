# email
## email template. hacks. info


* всем картинкам ширину без обозначения единиц (т.е. без px, % итд)

* обязательно 3 первоначальные ячейки, чтобы выравнивалась основная по-цетнру

* если делать ссылки с href="#" или с другим отличным от нормального URL значением, то некоторые клиенты будут вырезать <a></a>,
так как ссылка без ссылки - не ссылка

* все что с !important -outlook не понимает, ломается

* все, что в медиа запросе - все с !important

* медиа запросы: чтобы нужные клиенты сжимались, а древние сохраняли масштаб 600пкс
пишем стиль для главной таблицы min-width:600px, а в медиа запросе пишем min-width:100%

* чтобы перестраивать ячейки на мобилке (менять их на display:block, например) надо использовать th

* firefox (mozilla) не будет скрывать картинку по нулевым значениям высоты и ширины.
Нужно писать max-width и/или max-height в ноль. А также делаем обертку в ноль и overflow hidden.

* display:none не воспринимается некоторыми бразуерами

* outlook 2016 перед line-height пишем mso-line-height-rule:exactly;
