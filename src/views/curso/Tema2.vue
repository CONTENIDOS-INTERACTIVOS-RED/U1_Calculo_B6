<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Funciones'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Una función es una relación entre dos conjuntos, donde cada elemento del <b>dominio</b> se asocia con un único elemento del <b>rango o codominio.</b> En otras palabras, cada <b>valor de entrada</b> (variable independiente) tiene un <b>único valor de salida</b> (variable dependiente). Las funciones pueden representarse mediante:

    .bg-full-width.bg_img
      .px-4.px-md-5.py-4

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Primera	
                  p.mb-0 Ecuaciones
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Segunda		
                  p.mb-0 Gráficas
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Tercera		
                  p.mb-0 Tablas de valores
    
        .row.mb-5
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/tema2/3.svg", data-aos="zoom-in")
          .col-lg-8.order-1.mb-3.mb-lg-0
            p(data-aos="fade-left") Según Ortiz Campos et al. (2016), el concepto de función es fundamental en el análisis matemático y tiene aplicaciones en economía y negocios. Permite modelar relaciones entre variables como <b>oferta y demanda, costos de producción, ingresos y utilidades.</b>
        
        .row.justify-content-center
          .col-lg-8
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 ¿Qué es una Función?
                      p.mb-0 Para ampliar los conceptos sobre funciones, le invitamos a ver el siguiente vídeo.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/qzEI5UXljeU" target="_blank")
                        span Ver video
                        i.fas.fa-arrow-right
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-1.p-5(data-aos="fade-left")
          h5 Ejemplo 
          p.mb-0 Una empresa produce y vende un producto. La función de costo total está dada por C(x) = 1000 + 50x, donde x es la cantidad producida. Esta función indica que los costos totales se componen de un costo fijo de $1000 y un costo variable de $50 por unidad producida. A medida que la cantidad producida aumenta, los costos totales también se incrementan siguiendo la relación establecida por la función.
    
    h2(data-aos="fade-left") Ejercicios
    p.mb-5 A continuación, se presentan ejercicios sobre funciones para analizar su definición, evaluación y dominio.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/5.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="¿La relación x² + y² = 25 representa una función?")
            p Para que una relación sea una función, cada valor de la variable independiente (x) debe corresponder a un único valor de la variable dependiente (y). En la ecuación dada, para cada x existen dos valores de y (uno positivo y otro negativo). Por lo tanto, x² + y² = 25 no representa una función.
    
          .div(titulo="Cálculo de f(5) y f(-2) en la función f(x) = 2x - 3")
            p Para encontrar el valor de f(x) para un valor específico de x, simplemente reemplazamos x en la ecuación de la función.
            p.mb-0.text-center f(5) = 2(5) - 3 = 10 - 3 = 7
            p.mb-0.text-center f(-2) = 2(-2) - 3 = -4 - 3 = -7
            p.mb-0.text-center Por lo tanto, f(5) = 7 y f(-2) = -7.

    
          .div(titulo="Dominio y rango de la función f(x) = √(x - 1)")
            p El dominio se obtiene considerando que la raíz cuadrada debe tener un argumento no negativo: x - 1 ≥ 0 → x ≥ 1. Entonces, el dominio es [1, ∞). El rango se determina observando que la raíz cuadrada siempre da valores no negativos y aumenta a medida que x aumenta, por lo que el rango es [0, ∞).

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Funciones especiales
    
    p.mb-4 Las funciones especiales poseen propiedades y aplicaciones particulares en distintos campos, incluyendo la economía y los negocios. Entre las más utilizadas se encuentran:

    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/6.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="2%" y="26.5%" numero="+")
                h5 Funciones lineales
                p Representan relaciones proporcionales, como la oferta y la demanda.
    
              .bg-color-white.box-shadow.p-3(x="73%" y="24%" numero="+")
                h5 Funciones cuadráticas
                p Modelan situaciones de optimización, como la maximización de utilidades o la minimización de costos.
    
              .bg-color-white.box-shadow.p-3(x="68%" y="66%" numero="+")
                h5 Funciones exponenciales y logarítmicas
                p Son fundamentales en el análisis del crecimiento y la decadencia, como el crecimiento poblacional o el interés compuesto.
    
    p.mb-4 Según García Franchini y Alvarado Arellano (2016), estas funciones permiten modelar distintos tipos de relaciones entre variables y facilitan el análisis matemático en diversos contextos.


    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-1.p-5.mb-3(data-aos="fade-left")
          h5 Ejemplo 
          p.mb-0 Una empresa produce un bien y ha determinado que su función de costo total está dada por C(x) = 500 + 10x + 0.1x2, donde x es la cantidad producida. Esta función cuadrática indica que los costos totales incluyen un costo fijo de $500, un costo variable de $10 por unidad y un costo marginal creciente de $0.1 por cada unidad adicional producida. La forma cuadrática de la función permite capturar la relación no lineal entre la cantidad producida y los costos totales.
        
        p Las funciones matemáticas se pueden representar gráficamente para comprender su comportamiento. A continuación, se presentan tres tipos de funciones con sus respectivos análisis y representaciones: una función lineal, una cuadrática y una exponencial.
    
    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Función lineal" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Función lineal
            p Se usa la ecuación <b>y= m x + b</b>, donde m= 2 y b = 1. Se eligen dos puntos: para x =  0, y=1; para x=1, y=3. Graficando los puntos (0,1) y (1,3) y uniéndolos con una recta, se obtiene la representación de la función.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/8.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Vértice e intersecciones" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Vértice e intersecciones
            p Se calcula el vértice con 
            p.mb-0 x = -b / (2a)
            p.mb-0 y = f(-b / (2a))
            p.mb-0 En este caso, a = 1, b = -4 y c = 3.
            p.mb-0 x = -(-4) / (2(1)) = 2
            p.mb-0 y = f(2) = 22 - 4(2) + 3 = 4 - 8 + 3 = -1

            p.mb-0 Por lo tanto, el vértice de la función es (2, -1).

            p.mb-0 Las intersecciones con los ejes se encuentran igualando f(x) = 0
            p.mb-0 x2 - 4x + 3 = 0
            p.mb-0 (x - 1)(x - 3) = 0
            p.mb-0 x = 1 o x = 3
            p.mb-0 f(0) = 02 - 4(0) + 3 = 3

            p.mb-0 Por lo tanto, las intersecciones con los ejes son (1, 0), (3, 0) y (0, 3).

    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/8-1.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Función exponencial" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Función exponencial
            p Para graficar la función exponencial f(x) = 2x, podemos evaluar la función en algunos puntos y unir los puntos resultantes con una curva suave.
            p.mb-0 Para x = -2, f(-2) = 2(-2) = 1/4
            p.mb-0 Para x = -1, f(-1) = 2(-1) = 1/2
            p.mb-0 Para x = 0, f(0) = 20 = 1
            p.mb-0 Para x = 1, f(1) = 21 = 2
            p Para x = 2, f(2) = 22 = 4
            p Graficando los puntos (-2, 1/4), (-1, 1/2), (0, 1), (1, 2) y (2, 4), y uniendo con una curva suave, obtenemos la representación gráfica de la función exponencial f(x) = 2x.

    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/8-2.png', alt='', style="width: 100%;")
    
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Operaciones con funciones
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/9.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las funciones pueden combinarse y modificarse mediante diversas operaciones, como la suma, resta, multiplicación, división y composición. Estas operaciones permiten crear nuevas funciones a partir de funciones existentes y modelar relaciones más complejas entre variables. Además, las transformaciones de funciones, como desplazamientos horizontales y verticales, reflexiones y dilataciones, también son operaciones importantes que permiten modificar las gráficas de las funciones.
        p(data-aos="fade-left") De acuerdo con Palacios Pineda (2017), las operaciones con funciones son herramientas poderosas en el análisis matemático y tienen aplicaciones en diversos campos, incluyendo la economía y los negocios. Por ejemplo, la suma de funciones puede utilizarse para combinar diferentes componentes de costos o ingresos, mientras que la composición de funciones permite modelar procesos secuenciales o en cascada.

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-1.p-5.mb-3(data-aos="fade-left")
          h5 Ejemplo 
          p.mb-0 Una empresa tiene dos líneas de producción, A y B. La función de costo de la línea A está dada por C_A(x) = 1000 + 20x, mientras que la función de costo de la línea B está dada por C_B(x) = 1500 + 15x, donde x es la cantidad producida en cada línea. Para encontrar la función de costo total de la empresa, podemos sumar las funciones de costo de ambas líneas: C_T(x) = C_A(x) + C_B(x) = (1000 + 20x) + (1500 + 15x) = 2500 + 35x. Esta función resultante representa el costo total de la empresa en función de la cantidad total producida.
    
    h2(data-aos="fade-left") Ejercicios
    p.mb-5 A continuación, se presentan ejercicios sobre operaciones con funciones.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/12.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Suma y resta de funciones")
            p Dadas las funciones f(x) = 2x + 1 y g(x) = x2 - 3, encontrar (f + g)(x) y (f - g)(x).

            p Solución:
            p Para sumar o restar funciones, simplemente sumamos o restamos los términos correspondientes de cada función.
            p.mb-0 (f + g)(x) = (2x + 1) + (x2 - 3) = x2 + 2x - 2
            p.mb-0 (f - g)(x) = (2x + 1) - (x2 - 3) = -x2 + 2x + 4
            p.mb-0 Por lo tanto, (f + g)(x) = x2 + 2x - 2 y (f - g)(x) = -x2 + 2x + 4.

    
          .div(titulo="Composición de funciones")
            p Dadas las funciones f(x) = x + 2 y g(x) = x2, encontrar (f ∘ g)(x) y (g ∘ f)(x).

            p Solución:
            p Para componer funciones, aplicamos una función al resultado de la otra función.
            p.mb-0 (f ∘ g)(x) = f(g(x)) = f(x2) = x2 + 2
            p.mb-0 (g ∘ f)(x) = g(f(x)) = g(x + 2) = (x + 2)2 = x2 + 4x + 4
            p.mb-0 Por lo tanto, (f ∘ g)(x) = x2 + 2 y (g ∘ f)(x) = x2 + 4x + 4.

    
    h2(data-aos="fade-left") Ejemplo: graficar la función f(x) = |x - 1| + 2.
    p.mb-5 La función dada involucra un valor absoluto, lo que significa que su gráfica tiene un punto de cambio o vértice. Para representarla correctamente, primero se analiza la función base y luego se aplica una transformación vertical. A continuación, se explican los pasos para obtener su representación gráfica.

    .row.mb-5
      .col-lg-8
        div.p-4.bg-color-6.mb-3
          p <b>A.</b>	Para graficar la función f(x) = |x - 1| + 2, primero graficamos la función f(x) = |x - 1| y luego desplazamos la gráfica 2 unidades hacia arriba. 
          p La función f(x) = |x - 1| tiene un vértice en x = 1 y es simétrica respecto a la recta x = 1.
          p.text-center.mb-0 Para x < 1, f(x) = -(x - 1) = 1 - x
          p.text-center Para x > 1, f(x) = x - 1
          p <b>B.</b>	Graficando las dos rectas y = 1 - x para x < 1 y y = x - 1 para x > 1, obtenemos la gráfica de f(x) = |x - 1|.
          p <b>C.</b>	Finalmente, desplazamos la gráfica 2 unidades hacia arriba para obtener la gráfica de f(x) = |x - 1| + 2.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
    
    .titulo-figura.mb-4
      h5 Figura 2.
      span Gráfico de la función f(x) = |x - 1| + 2
    .row.justify-content-center.align-items-center.mb-5.bg-color-8
      .col-lg-4.p-4
        figure
          img(src="@/assets/curso/tema2/14.png", data-aos="zoom-in")
        

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Dominio y rango de una función
    
    .bg-full-width.bg_img
      .px-4.px-md-5.py-4
        .row.mb-5
          .col-lg-2.order-2
            figure
              img(src="@/assets/curso/tema2/15.svg", data-aos="zoom-in")
          .col-lg-10.order-1.mb-3.mb-lg-0
            p(data-aos="fade-left") El dominio de una función es el conjunto de todos los valores posibles que puede tomar la variable independiente (entrada) de la función. En otras palabras, el dominio especifica los valores para los cuales la función está definida. Por otro lado, el rango de una función es el conjunto de todos los valores posibles que puede tomar la variable dependiente (salida) de la función, es decir, los valores resultantes de evaluar la función en los elementos del dominio.
        
        .row.justify-content-center
          .col-lg-8
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 Dominio de una Función
                      p.mb-0 Para ampliar los conceptos sobre dominio de una función, le invitamos a ver el siguiente vídeo.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/rA_JFUFE3Yg" target="_blank")
                        span Ver video
                        i.fas.fa-arrow-right

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/16.png", data-aos="zoom-in")
      .col-lg-8   
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Según Riquenes Rodríguez et al. (2016), el dominio y rango de una función son conceptos fundamentales en el análisis matemático y tienen implicaciones importantes en la modelación de situaciones reales.
        p(data-aos="fade-left") En el contexto económico y empresarial, el dominio de una función puede representar las restricciones o limitaciones en las variables de entrada, como las cantidades producidas o los precios, mientras que el rango puede indicar los posibles resultados o valores de salida, como los costos, ingresos o utilidades.
    
    h2(data-aos="fade-left") Ejemplo: Dominio y rango de una función de ingreso total

    div.bg-color-6.p-4
      p Una empresa tiene una función de ingreso total dada por:
      .row.justify-content-center.mb-3
        .col-lg-4
          .text-center.bg-color-white.p-4
            p.mb-0 I(x) = 100x - 0.5x²
      p donde x representa la cantidad vendida.

    .row.mb-5
      .col-lg-6.pe-0
        div.p-4.bg-color-6
          h5 Determinación del dominio  
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-5
              p.mb-0 La cantidad vendida no puede ser negativa, por lo que x ≥ 0.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-5
              p.mb-0 La capacidad máxima de producción es 100 unidades, lo que impone la restricción x ≤ 100.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-5
              p.mb-0 Por lo tanto, el dominio de la función es: [0, 100]
        figure
          img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in")
      .col-lg-6.ps-0
        div.p-4.bg-color-8.h-100
          h5 Determinación del rango  
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-5
              p.mb-0 La función es cuadrática con concavidad hacia abajo, lo que indica la presencia de un máximo absoluto.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-5
              span El valor máximo se alcanza en el vértice, determinado al derivar la función e igualar a cero: 
                p.mb-0.text-center I'(x) = 100 - x = 0 
                p.text-center x = 100
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-5
              span Evaluamos I(100) para encontrar el ingreso máximo:
                p.mb-0 I(100) = 100(100) - 0.5(100²) = 5000
                p.mb-0 Por lo tanto, el rango de la función es: [0, 5000]

    h2(data-aos="fade-left") Ejercicios
    p.mb-5 En estos ejercicios se analizarán el dominio y el rango de distintas funciones matemáticas. Se abordarán funciones con raíces, fracciones y expresiones lineales, destacando las restricciones en sus variables y los valores que pueden asumir sus resultados.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/18.png")
            .col-lg-7.order-lg-1
              h5 Dominio y rango de f(x) = √(x + 4).
              p Determinar el dominio y rango de la función f(x) = √(x + 4).

              h5 Solución:
                p.mb-0 - Dominio: Para que la raíz cuadrada esté definida, el argumento debe ser no negativo.
                  p.mb-0 x + 4 ≥ 0
                  p.mb-0 x ≥ -4
                  p Por lo tanto, el dominio de la función es [-4, ∞).
                p - Rango: la raíz cuadrada siempre produce valores no negativos. Además, a medida que x aumenta, la raíz             p cuadrada de x + 4 también aumenta. El valor mínimo se alcanza cuando x = -4, y f(-4) = √(0) = 0. Por lo             p tanto, el rango de la función es [0, ∞).

    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/19.png")
            .col-lg-7.order-lg-1
              h5 Dominio de f(x) = (x2 - 1) / (x - 1).
              p Determinar el dominio de la función f(x) = (x2 - 1) / (x - 1).

              h5 Solución:
                p.mb-0 - Dominio: La función está definida para todos los valores de x excepto donde el denominador se hace              p cero.
                  p.mb-0 x - 1 ≠ 0
                  p.mb-0 x ≠ 1
                  p Por lo tanto, el dominio de la función es (-∞, 1) ∪ (1, ∞), es decir, todos los números reales excepto 1.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/20.png")
            .col-lg-7.order-lg-1
              h5 Rango de f(x) = -2x + 3.
              p Determinar el rango de la función f(x) = -2x + 3.

              h5 Solución:
              p.mb-0 Rango: la función lineal f(x) = -2x + 3 tiene una pendiente negativa, lo que significa que a medida que x aumenta, f(x) disminuye. La función toma todos los valores reales. Por lo tanto, el rango de la función es (-∞, ∞), es decir, todos los números reales.

    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Tipos de funciones 
    
    p.mb-4 Las funciones matemáticas desempeñan un papel fundamental en la comprensión y modelado de fenómenos en diversas disciplinas, desde la física y la economía hasta la biología y la ingeniería. A través de su estudio, es posible analizar cómo una variable depende de otra y predecir comportamientos en distintos contextos.

    .bg-full-width.bg-color-6.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Tipos de funciones
            p.mb-4(data-aos="fade-right") Los invitamos a leer <b>Tipos de funciones</b>, un recorrido por las funciones lineales, cuadráticas, exponenciales y logarítmicas, con aplicaciones clave en la gestión empresarial. A través de ejemplos y ejercicios prácticos, este material permitirá comprender cómo estas funciones modelan fenómenos económicos y financieros, facilitando la toma de decisiones y el análisis de datos en distintos contextos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Tipos de funciones.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/21.png', alt='')

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/40452" target="_blank" rel="noopener noreferrer") García Franchini, C. & Alvarado Arellano, M. (2016). Cálculo diferencial en competencias: ( ed.). Grupo Editorial Patria. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/40405?page=1" target="_blank" rel="noopener noreferrer") Ortiz Campos, F. J. Ortiz Cerecedo, F. J. & Ortiz Cerecedo, F. J. (2016). Cálculo diferencial: (2 ed.). Grupo Editorial Patria. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/40498" target="_blank" rel="noopener noreferrer") Palacios Pineda, L. M. (2017). Cálculo de varias variables: ( ed.). Grupo Editorial Patria. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/71652?page=1" target="_blank" rel="noopener noreferrer") Riquenes Rodríguez, M. Sánchez Cabrera, R. & Paz Rodríguez, J. (2016). Ejercicios y problemas sobre cálculo diferencial de funciones reales de una variable real: ( ed.). Editorial Universitaria.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href=" https://www.mep.go.cr/educatico/recursos-libres-matematica-introduccion-funciones" target="_blank" rel="noopener noreferrer") Ministerio de Educación Pública de Costa Rica. (s.f.). Recursos libres de matemática: introducción a las funciones. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://flexbooks.ck12.org/cbook/ck-12-conceptos-de-%C3%A1lgebra-nivel-b%C3%A1sico-en-espa%C3%B1ol/section/1.12/primary/lesson/funciones-que-describen-situaciones-bsc-alg-spn/?referrer=search " target="_blank" rel="noopener noreferrer") CK-12 Foundation. (s.f.). Funciones: Conceptos básicos. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://stemonline.tech/es/matematicas/graficas/" target="_blank" rel="noopener noreferrer") STEM Online Tech. (s.f.). Simulaciones gráficas de funciones online gratis.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/qzEI5UXljeU " target="_blank" rel="noopener noreferrer") Épsilon Akdemy. (2020, 13 de marzo). ¿Qué es una función? [Video]. YouTube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/rA_JFUFE3Yg" target="_blank" rel="noopener noreferrer") Épsilon Akdemy. (2020, 15 de marzo). Dominio de una función. [Video]. YouTube  

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Cuál es la solución de la inecuación ∣x−3∣ ≤ 5?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'x ≤ −2 o x ≥ 8',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: '−2 ≤ x ≤8',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'x ≥ 8',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'x=3',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La inecuación ∣x−3∣ ≤ 5 significa que la distancia entre x y 3 es menor o igual a 5, lo que nos da el intervalo −2 ≤ x ≤ 8.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes opciones describe correctamente una función?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Cada valor de x tiene un solo valor de y, pero algunos valores de y pueden tener varios valores de x.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Un valor de x puede tener más de un valor de y.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Cada valor de y tiene exactamente un valor de x.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Un valor de y puede tener más de un valor de x.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'En una función, cada entrada de x (dominio) tiene un único valor de salida y (rango), pero varios valores de x pueden compartir un mismo y.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de las siguientes funciones es una función cuadrática?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'f(x)=2x+3',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'f(x)=x2−5x+6',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'f(x)=√x',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'f(x)=5x',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Las funciones cuadráticas son de la forma f(x)=ax2+bx+c donde el término con x2 tiene el mayor exponente.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: '¿Cuál es la forma de resolver la inecuación ∣2x−1∣ > 3?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: '2x−1 > 3 o 2x - 1 < −3',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: '2x−1 > 3',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: '2x−1 < −3',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ninguna de las anteriores',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Cuando tenemos una inecuación con valor absoluto, debemos dividirla en dos inecuaciones: una con el signo positivo y otra con el signo negativo.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: '¿Cuál de las siguientes es una función lineal?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'f(x)=x2+3x−2',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'f(x)=3x+4',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'f(x)=sin(x) ',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'f(x)=1/x',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Una función lineal es de la forma f(x)=mx+b, donde m es la pendiente y b es la intersección con el eje y. Es una función de primer grado.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
