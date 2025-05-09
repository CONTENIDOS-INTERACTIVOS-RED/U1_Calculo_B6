<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Desigualdades e Inecuaciones, valor absoluto'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El cálculo es una rama fundamental de las matemáticas que se enfoca en el estudio de las tasas de cambio y la acumulación de cantidades. En el ámbito de la administración de empresas, permite modelar y analizar diversos fenómenos económicos y financieros, proporcionando herramientas clave para la toma de decisiones estratégicas.
    
        .bg-color-3.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En esta unidad, se explorarán los fundamentos del cálculo, comenzando por las desigualdades e inecuaciones, el concepto de valor absoluto y su representación gráfica. Además, se abordarán las funciones, sus tipos, características y operaciones. Se enfatizará la interpretación económica de estos conceptos y su aplicación en situaciones prácticas relacionadas con costos, ingresos, utilidades, oferta y demanda.
        
        p Para facilitar la comprensión y aplicación de estos temas, se incluirán ejemplos concretos y ejercicios resueltos paso a paso. El objetivo es proporcionar una base sólida que permita a los estudiantes desarrollar habilidades analíticas y de resolución de problemas esenciales en el entorno empresarial actual.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Desigualdades

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Una desigualdad es una expresión matemática que compara dos cantidades utilizando los símbolos:
    
        .bg-color-6.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.order-lg-2
              img(src="@/assets/curso/tema1/3.svg").mx-auto
            .col-lg.order-lg-1.p-4
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-5
                  p.mb-0 Menor que (<)
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-5
                  p.mb-0 Mayor que (>)
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-5
                  p.mb-0 Menor o igual que (≤)
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-5
                  p.mb-0 Mayor o igual que (≥)
        p Las desigualdades establecen relaciones de orden entre números o expresiones algebraicas. <b>Por ejemplo</b>, la expresión <b>x < 5</b> indica que el valor de <b>x</b> debe ser menor que 5. Según Ortiz Campos et al. (2016), estas expresiones son fundamentales en el cálculo y tienen múltiples aplicaciones en la modelación de situaciones económicas y empresariales. Se utilizan, por ejemplo, en la determinación de intervalos de precios, costos o beneficios, permitiendo establecer límites y condiciones para la toma de decisiones óptimas.
    
    h2(data-aos="fade-left") Ejemplo aplicado

    .bg-full-width.bg_img
      .px-4.px-md-5.py-4
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") Una empresa tiene un costo fijo de $10,000 y un costo variable de $50 por unidad producida. Si el precio de venta de cada unidad es de $80, ¿cuántas unidades debe vender la empresa para obtener una utilidad mayor a $5,000?
            p(data-aos="fade-left") Esta situación se representa mediante la desigualdad:

        
            .bg-color-1.p-4(data-aos="fade-left")
                p.mb-0 80x−(10,000+50x)>5,000 80x - (10,000 + 50x) > 5,000 80x−(10,000+50x)>5,000
        
        .row.justify-content-center.align-items-stretch.mb-4
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/6.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Expresión inicial	
                  p.mb-0 80x - (10,000 + 50x) > 5,000
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/6.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Eliminación de paréntesis	
                  p.mb-0 80x - 10,000 - 50x > 5,000
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/6.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Agrupación de términos	
                  p.mb-0 30x - 10,000 > 5,000
        
        .row.justify-content-center.align-items-stretch.mb-4
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/6.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Suma de 10,000 en ambos lados		
                  p.mb-0 30x > 15,000
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/6.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 División entre 30	
                  p.mb-0 x > 500

        p.mb-4 <b>Conclusión:</b> la empresa debe vender más de <b>500 unidades</b> para obtener una utilidad superior a $5,000.

        .row.justify-content-center
          .col-lg-8
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 Desigualdades
                      p.mb-0 Para ampliar los conceptos sobre desigualdades, le invitamos a ver el siguiente vídeo.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/clfycxRF3zw " target="_blank")
                        span Ver video
                        i.fas.fa-arrow-right
    

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Inecuaciones

    .bg-full-width.bg_img_1
      .px-4.px-md-5.py-4
        .row.mb-5
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in")
          .col-lg-8.order-1.mb-3.mb-lg-0
            p(data-aos="fade-left") Las inecuaciones son desigualdades que involucran una o más variables y se cumplen para un conjunto de valores de dichas variables. A diferencia de las ecuaciones, que buscan valores específicos que satisfagan la igualdad, las inecuaciones determinan los intervalos o regiones donde se cumplen las desigualdades. Estas pueden ser <b>lineales, cuadráticas, racionales, exponenciales o logarítmicas</b>, según las expresiones algebraicas involucradas.
        
            .bg-color-1.p-4(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema1/7.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Según García Franchini y Alvarado Arellano (2016), las inecuaciones son herramientas valiosas en la modelación de restricciones y condiciones en problemas de optimización. En el contexto empresarial, se utilizan para representar <b>limitaciones de recursos, capacidades de producción y condiciones de mercado</b>, aspectos clave para la toma de decisiones estratégicas.
        
        h2(data-aos="fade-left") Ejemplo aplicado
        p.mb-5 Una empresa produce dos tipos de productos, <b>A y B</b>.

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/9.svg" alt="" style="width: 90px")
              h5.text-center Primero
              p.mb-0.text-center Cada unidad del producto A requiere 2 horas de trabajo y genera una ganancia de $30.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/9.svg" alt="" style="width: 90px")
              h5.text-center Segundo
              p.mb-0.text-center Cada unidad del producto B requiere 3 horas de trabajo y genera una ganancia de $40.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/9.svg" alt="" style="width: 90px")
              h5.text-center Tercero
              p.mb-0.text-center La empresa dispone de un máximo de 120 horas de trabajo por semana.
    
    p.mb-5 El objetivo es determinar cuántas unidades de cada producto se deben producir para maximizar la ganancia.

    h2(data-aos="fade-left") Paso 1. Definir la función objetivo y restricciones
    p.mb-5 Para resolver este problema, se establecen las siguientes restricciones:

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-7
                    p.mb-0 La restricción de horas de trabajo se expresa como 2x+3y≤120, indicando que el tiempo total utilizado no debe superar las 120 horas.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-7
                    p.mb-0 Se incluye la restricción de no negatividad: x≥0,y≥0, pues no se pueden producir cantidades negativas de productos.
                div.bg-color-white.p-4
                  p La función objetivo, que representa la ganancia total, es:
                  p.text-center Z=30x+40y
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema1/10.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    h2(data-aos="fade-left") Paso 2. Encontrar la ecuación de la restricción principal
    p.mb-5 Para poder graficar la restricción 2x+3y=120, es necesario encontrar sus puntos de intersección con los ejes. Se hace despejando una variable en función de la otra.
    
    .titulo-figura.mb-4
      h5 Tabla 1.
      span Puntos de intersección de la restricción
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-6 Explicación
            th.bg-color-6 Cálculo
            th.bg-color-6 Punto resultante
        tbody
          tr
            td Si <b>x = 0</b>, despejamos <b>y</b> en la ecuación 2(0)+3y=120
            td y=40
            td (0,40)
          tr
            td Si <b>y = 0</b>, despejamos <b>x</b> en la ecuación 2x+3(0)=120
            td x=60
            td (60,0)
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Estos puntos representan los extremos de la recta <b>2x+3y=120</b> en el plano cartesiano. La región factible se encuentra <b>por debajo de esta recta</b>, dentro del primer cuadrante, ya que solo se permiten valores positivos para x y y.
    
    h2(data-aos="fade-left") .mb-3.mb-lg-0. Determinar los vértices de la región factible
    p.mb-5 La región factible está delimitada por tres puntos clave, que representan los posibles niveles de producción dentro de las restricciones establecidas.
            
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 (0,0)	
              p.mb-0 No se produce ningún producto.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 (60,0)		
              p.mb-0 Se producen 60 unidades del producto A y 0 del producto B.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 (0,40)		
              p.mb-0 Se producen 0 unidades del producto A y 40 unidades del producto B.
    
    p.mb-4 Estos puntos representan los escenarios en los que la empresa puede operar sin exceder las 120 horas de trabajo disponibles.

    h2(data-aos="fade-left") Paso 4. Evaluar la función objetivo en los vértices
    p.mb-5 Para determinar la mejor estrategia de producción, se evalúa la función objetivo <b>Z=30x+40y</b> en cada uno de los vértices identificados.

    .titulo-figura.mb-4
      h5 Tabla 2.
      span Cálculo de la ganancia en cada vértice
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-6 Vértice
            th.bg-color-6 Cálculo de Z=30x+40y
            th.bg-color-6 Ganancia total
        tbody
          tr
            td (0,0)
            td 30(0)+40(0)
            td $0
          tr
            td (60,0)
            td 30(60)+40(0)
            td $1800
          tr
            td (0,40)
            td 30(0)+40(40)
            td $1600
    
    h2(data-aos="fade-left") Paso 5. Conclusión

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/13.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") La máxima ganancia se obtiene en el vértice (60,0), es decir, cuando la empresa produce 60 unidades del producto A y 0 del producto B, logrando una ganancia de $1800.
    
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Este resultado indica que, dentro de las restricciones de tiempo, <b>es más rentable concentrar la producción en el producto A.</b>
        p A continuación, se presenta un <b>gráfico de la restricción</b> 2x+3y≤120, donde la región factible está sombreada y los vértices están resaltados en rojo.

    .bg-full-width.bg_img_2
      .px-4.px-md-5.py-4
        .titulo-figura.mb-4
          h5 Figura 1.
          span Diagrama de la restricción 2x+3y≤120
        .row.justify-content-center.align-items-center.mb-5.bg-color-8
          .col-lg-6.p-4
            figure
              img(src="@/assets/curso/tema1/14.png", data-aos="zoom-in")

        .row.justify-content-center
          .col-lg-8
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 Inecuaciones Lineales
                      p.mb-0 Para ampliar los conceptos sobre inecuaciones lineales, le invitamos a ver el siguiente vídeo.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/cRQttnbN7l0" target="_blank")
                        span Ver video
                        i.fas.fa-arrow-right
    
    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Valor absoluto

    .bg-full-width.bg_img
      .px-4.px-md-5.py-4

        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-3.p-4.mb-3(data-aos="fade-left")
              p.mb-0 El valor absoluto de un número representa su distancia desde cero en la recta numérica, sin considerar su signo. Se denota utilizando barras verticales a ambos lados del número o expresión. Por ejemplo, |3| = 3 y |-3| = 3. El valor absoluto tiene propiedades importantes, como siempre ser no negativo y satisfacer la desigualdad triangular.
            p(data-aos="fade-left") Según Palacios Pineda (2017), el concepto de valor absoluto es fundamental en el análisis de errores y desviaciones en el ámbito empresarial. Por ejemplo, al comparar los valores reales de ventas, costos o beneficios con los valores proyectados, el valor absoluto permite cuantificar la magnitud de las diferencias, independientemente de si son positivas o negativas.
        .row.justify-content-center
          .col-lg-8
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 ¿Qué es el VALOR ABSOLUTO? 
                      p.mb-0 Para ampliar los conceptos sobre valor absoluto, le invitamos a ver el siguiente vídeo.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/dLRglUob2mY " target="_blank")
                        span Ver video
                        i.fas.fa-arrow-right
                      
    .row.mb-5
      .col-lg-6.pe-lg-0
        div.p-4.bg-color-6
          h5 Ejemplo  
          p Una empresa estima que sus ventas mensuales serán de $500,000. Sin embargo, al finalizar el mes, las ventas reales fueron de $480,000. ¿Cuál es la desviación absoluta entre las ventas estimadas y las ventas reales? Podemos calcular la desviación absoluta utilizando el valor absoluto:
          p |Ventas estimadas - Ventas reales| = |500,000 - 480,000| = |20,000| = $20,000.
        figure
          img(src="@/assets/curso/tema1/16.png", data-aos="zoom-in")
      .col-lg-6.ps-lg-0
        div.p-4.bg-color-8.h-100
          h5 Ejercicios:  
          h5 a) Calcular el valor absoluto de -12
          p Solución: |-12| = 12
          h5 b) Simplificar la expresión: |3x - 7| - |2x + 5|
          p.mb-0 Solución:
          p.mb-0 No se puede simplificar dado que depende de los valores de x. 
          p.mb-0 Por ejemplo, si x = 1, entonces |3(1) - 7| - |2(1) + 5| = |-4| - |7| = 4 - 7 = -3.
          p Pero si x = 3, entonces |3(3) - 7| - |2(3) + 5| = |2| - |11| = 2 - 11 = -9.
          h5 c) Resolver la ecuación: |2x - 3| = 7
          p.mb-0 Solución:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-5
              p.mb-0 Caso 1: 2x - 3 = 7 → 2x = 10 → x = 5
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-5
              p.mb-0 Caso 2: 2x - 3 = -7 → 2x = -4 → x = -2
          p.mb-0 Por lo tanto, las soluciones son x = 5 y x = -2.

    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Representación gráfica e interpretación económica
    
    p.mb-4 La representación gráfica de las desigualdades e inecuaciones permite visualizar las regiones del plano cartesiano donde se cumplen dichas condiciones. Para graficar una desigualdad lineal, se grafica la recta correspondiente a la ecuación asociada y se sombrean los puntos que satisfacen la desigualdad.

    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/17.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-8.p-4.mb-3(data-aos="fade-left")
          .row
            .col-lg-6
              div.linea-punteada
              p.text-center Si la desigualdad es estricta (< o >), se utiliza una <b>línea punteada.</b>
            .col-lg-6
              div.linea-solida
              p.text-center Si es no estricta (≤ o ≥), se utiliza una <b>línea sólida.</b>
        p(data-aos="fade-left") En el caso de las inecuaciones, se grafican todas las restricciones y se identifica la <b>región factible</b> que satisface simultáneamente todas las condiciones.
        p(data-aos="fade-left") Según <b>Chíguil Figueroa y Castillo Soto (2024)</b>, la representación gráfica de las desigualdades e inecuaciones es fundamental para el análisis de modelos económicos y la optimización de recursos.
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/18.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Teoría del consumidor")
            p Las restricciones presupuestarias se representan mediante inecuaciones lineales, y la región factible corresponde al conjunto de canastas de bienes que el consumidor puede adquirir dado su presupuesto.
    
          .div(titulo="Teoría de la producción")
            p Las restricciones tecnológicas y de recursos se modelan mediante inecuaciones, y la región factible representa las combinaciones de insumos que la empresa puede utilizar para producir.
        
    .row.mb-5
      .col-lg-7
        div.p-4.bg-color-6.mb-3
          h5 Ejemplo  
          p Un consumidor tiene un presupuesto de $100 para gastar en dos bienes, X e Y.
          .row.justify-content-center.align-items-stretch.mb-3
            .col-lg-4.mb-3.mb-lg-0
              .bg-color-white.h-100.text-center
                .bg-color-9.px-4.px-lg-5.py-3.rounded-top
                  p.mb-0 Precio del bien X	
                p.mb-0.p-4 $4 por unidad

            .col-lg-4.mb-3.mb-lg-0
              .bg-color-white.h-100.text-center
                .bg-color-9.px-4.px-lg-5.py-3.rounded-top
                  p.mb-0 Precio del bien Y	
                p.mb-0.p-4 $2 por unidad

            .col-lg-4.mb-3.mb-lg-0
              .bg-color-white.h-100.text-center
                .bg-color-9.px-4.px-lg-5.py-3.rounded-top
                  p.mb-0 Restricción presupuestaria
                p.mb-0.p-4 4x + 2y ≤ 100
          p Al graficar esta inecuación, se obtiene una región triangular en el primer cuadrante, delimitada por la recta presupuestaria y los ejes coordenados. Cada punto dentro de esta región representa una combinación de bienes X e Y que el consumidor puede adquirir sin superar su presupuesto.
        p Algunos ejercicios son:
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/19.png", data-aos="zoom-in")
    
    .bg-full-width.bg_img_1
      .px-4.px-md-5.py-4
        .row.align-items-start.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/20.png", alt="").mb-4.mb-lg-0
          .col-lg-8
        
            AcordionA(tipo="b")
              .div(titulo="a) Graficar la desigualdad")
                p <b>Graficar la desigualdad:</b> y < 2x + 3
                p Se grafica la recta y < 2x + 3 con línea punteada y se sombrea la región debajo de la recta.
              .div(titulo="b) Graficar el sistema de inecuaciones")
                p <b>Graficar el sistema de inecuaciones:</b> x + y ≤ 6, x ≥ 0, y ≥ 0
                p Se grafican las rectas x + y = 6, x = 0 e y = 0. La región factible es el triángulo formado por estas tres rectas en el primer cuadrante.
              .div(titulo="c) Interpretar económicamente la inecuación")
                p <b>Interpretar económicamente la inecuación:</b> 50x + 30y ≤ 1500
                p Esta inecuación puede representar la restricción presupuestaria de un consumidor, donde x e y son las cantidades de dos bienes, y $50 y $30 son sus precios unitarios respectivos. La desigualdad indica que el gasto total en ambos bienes no debe exceder los $1500. La región factible representa todas las combinaciones de cantidades de los bienes que el consumidor puede adquirir dado su presupuesto máximo.

        #t_1_5.titulo-segundo(data-aos="flip-up")
          h2 #[span 1.5] Aplicaciones en economía y negocios 
          
        p.mb-4 Las desigualdades e inecuaciones tienen múltiples aplicaciones en economía y negocios, ya que permiten modelar y analizar funciones económicas clave, como:

        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/21.svg" alt="" style="width: 90px")
              h5.text-center Funciones de costo
              p.mb-0.text-center Relación entre la cantidad producida y los costos totales de producción.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/22.svg" alt="" style="width: 90px")
              h5.text-center Funciones de ingreso
              p.mb-0.text-center Relación entre la cantidad vendida y los ingresos totales.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/23.svg" alt="" style="width: 90px")
              h5.text-center Funciones de utilidad
              p.mb-0.text-center Nivel de satisfacción o beneficio del consumidor al adquirir una combinación de bienes.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/24.svg" alt="" style="width: 90px")
              h5.text-center Funciones de oferta y demanda
              p.mb-0.text-center Interacción entre compradores y vendedores que determina el precio y la cantidad de equilibrio.
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/25.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Según Bruzual y Domínguez (2016), estas funciones son fundamentales para comprender el comportamiento de productores y consumidores, así como el funcionamiento de los mercados.
    
    h2(data-aos="fade-left") Ejemplo aplicado: maximización de la utilidad en una empresa
    p.mb-5 Una empresa produce y vende un producto.

    .titulo-figura.mb-4
      h5 Tabla 3.
      span Parámetros del problema
    .tabla-a.color-acento-botones.mb-5
      table.text-center
        thead
          tr
            th.bg-color-6.text-center Variable
            th.bg-color-6.text-center Expresión
        tbody
          tr
            td Costos totales (CT)
            td CT(x)=500+10, donde x es la cantidad producida.
          tr
            td Ingreso total (IT)
            td IT(x)=25x
          tr
            td Ingreso marginal (IMg)
            td IMg(x)=2
          tr
            td Costo marginal (CMg)
            td CMg(x)=10
    
    div.bg-color-6.p-4.mb-5
      p Para maximizar la utilidad, se igualan el ingreso marginal y el costo marginal: 
      .row.justify-content-center.mb-3
        .col-lg-4
          .text-center.bg-color-white.p-4
            p.mb-0 IMg(x )= CMg(x) ⇒ 25=10 ⇒ x=150 
      p Por lo tanto, la empresa maximiza su utilidad produciendo y vendiendo <b>150 unidades</b> del producto.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/26.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        h2(data-aos="fade-left") Ejercicios
        h5 a) Cálculo de unidades necesarias para alcanzar una utilidad de $2000
        p(data-aos="fade-left") Una empresa tiene costos fijos de $1000 y un costo variable de $5 por unidad. Si el precio de venta es de $12 por unidad, ¿cuántas unidades debe vender para obtener una utilidad de $2000?
    
        .bg-color-3.p-4.mb-3(data-aos="fade-left")
          p Solución:
          div.text-center
            p.mb-0 Utilidad = Ingresos - Costos
            p.mb-0 2000 = 12x - (1000 + 5x)
            p.mb-0 2000 = 7x - 1000
            p.mb-0 3000 = 7x
            p.mb-0 x ≈ 428.57
        p Por lo tanto, la empresa debe vender aproximadamente 429 unidades para obtener una utilidad de $2000.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/27.png", data-aos="zoom-in")
      .col-lg-8
        h5 b) Nivel de producción que maximiza la utilidad
        p(data-aos="fade-left") La función de demanda de un producto está dada por P = 100 - 2Q, donde Q es la cantidad demandada. Si el costo marginal de producción es constante e igual a $40, ¿cuál es el nivel de producción que maximiza la utilidad de la empresa?
    
        .bg-color-3.p-4.mb-3(data-aos="fade-left")
          p Solución:
          p La función de ingreso total es IT(Q) = P * Q = (100 - 2Q) * Q = 100Q - 2Q^2
          p El ingreso marginal es IMg(Q) = dIT/dQ = 100 - 4Q
          p Igualando el ingreso marginal al costo marginal: 100 - 4Q = 40
          p Despejando Q: 4Q = 60 → Q = 15
          p Por lo tanto, el nivel de producción que maximiza la utilidad de la empresa es de 15 unidades.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/28.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        h5 c) Cantidades óptimas de consumo de dos bienes
        p(data-aos="fade-left")  La función de utilidad de un consumidor está dada por U(x, y) = 2x + 3y, sujeta a la restricción presupuestaria 4x + 5y ≤ 120. ¿Cuáles son las cantidades óptimas de consumo de los bienes x e y?
    
        .bg-color-8.p-4.mb-3(data-aos="fade-left")
          p Solución:
          p Planteamos el problema de optimización:
          p.mb-0.text-center Maximizar U(x, y) = 2x + 3y
          p.mb-0.text-center Sujeto a: 4x + 5y ≤ 120, x ≥ 0, y ≥ 0

          p Utilizando el método gráfico, encontramos que el punto óptimo de consumo se encuentra en la intersección de la recta presupuestaria y la curva de indiferencia más alejada del origen. Resolviendo el sistema de ecuaciones:
          p.mb-0.text-center 4x + 5y = 120
          p.mb-0.text-center 2x + 3y = k (donde k es una constante)
          p.mb-0.text-center Obtenemos: x = 20 e y = 12

          p Por lo tanto, las cantidades óptimas de consumo son 20 unidades del bien x y 12 unidades del bien y.


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/117596?page=1" target="_blank" rel="noopener noreferrer") Bruzual, R. & Domínguez, M. (2016). Cálculo diferencial en varias variables: ( ed.). D - Universidad Central de Venezuela. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/275845?page=1" target="_blank" rel="noopener noreferrer") Chíguil Figueroa, F. & Castillo Soto, M. (2024). Manual de cálculo diferencial e integral. Usos y aplicaciones en la modelación microeconómica: (1 ed.). Editorial Miguel Ángel Porrúa.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/40405?page=1" target="_blank" rel="noopener noreferrer") Ortiz Campos, F. J. Ortiz Cerecedo, F. J. & Ortiz Cerecedo, F. J. (2016). Cálculo diferencial: (2 ed.). Grupo Editorial Patria. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/71652?page=1" target="_blank" rel="noopener noreferrer") Riquenes Rodríguez, M. Sánchez Cabrera, R. & Paz Rodríguez, J. (2016). Ejercicios y problemas sobre cálculo diferencial de funciones reales de una variable real: ( ed.). Editorial Universitaria. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.khanacademy.org/math/algebra-home/alg-absolute-value/alg-absolute-value-inequalities/v/absolute-value-inequalities" target="_blank" rel="noopener noreferrer") Khan Academy. (s.f.). Introducción a las desigualdades de valor absoluto. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://flexbooks.ck12.org/cbook/ck-12-conceptos-de-%C3%A1lgebra-nivel-b%C3%A1sico-en-espa%C3%B1ol/section/6.10/primary/lesson/inecuaciones-de-valor-absoluto-bsc-alg-spn/" target="_blank" rel="noopener noreferrer") CK-12 Foundation. (s.f.). Inecuaciones de valor absoluto.  
           

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/playlist?list=PL9SnRnlzoyX2TEPnbgyH8Oeuuj2KrtUds" target="_blank" rel="noopener noreferrer") YouTube. (s.f.). Demostraciones sobre valor absoluto y desigualdades. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/clfycxRF3zw" target="_blank" rel="noopener noreferrer") Épsilon Akdemy. (2020, 10 de marzo). Desigualdades [Video]. YouTube  
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/cRQttnbN7l0" target="_blank" rel="noopener noreferrer") Épsilon Akdemy. (2020, 10 de marzo). Inecuaciones Lineales [Video]. YouTube  
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/dLRglUob2mY " target="_blank" rel="noopener noreferrer") Épsilon Akdemy. (2020, 10 de marzo). ¿Qué es el valor absoluto? [Video]. YouTube 
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
