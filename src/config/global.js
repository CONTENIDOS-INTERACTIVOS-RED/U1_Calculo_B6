export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Desigualdades e Inecuaciones, valor absoluto y funciones',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Desigualdades e Inecuaciones, valor absoluto',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Desigualdades',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Inecuaciones',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Valor absoluto',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Representación gráfica e interpretación económica',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Aplicaciones en economía y negocios ',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Funciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Funciones especiales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Operaciones con funciones',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Dominio y rango de una función',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Tipos de funciones',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bruzual, R. & Domínguez, M. (2016). Cálculo diferencial en varias variables: ( ed.). D - Universidad Central de Venezuela. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/117596?page=1',
    },
    {
      referencia:
        'García Franchini, C. & Alvarado Arellano, M. (2016). Cálculo diferencial en competencias: ( ed.). Grupo Editorial Patria. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/40452',
    },
  ],
  glosario: [
    {
      termino: 'Álgebra',
      significado:
        'rama de las matemáticas que estudia las estructuras, relaciones y cantidades utilizando símbolos y operaciones.',
    },
    {
      termino: 'Ángulo',
      significado:
        'abertura formada por dos semirrectas que tienen un origen común, llamado vértice.',
    },
    {
      termino: 'Argumento',
      significado:
        'en una función, es el valor de entrada o variable independiente.',
    },
    {
      termino: 'Asíntota',
      significado:
        'línea recta a la cual una curva se aproxima continuamente sin llegar a tocarla.',
    },
    {
      termino: 'Binomio',
      significado:
        'expresión algebraica compuesta por la suma o resta de dos términos.',
    },
    {
      termino: 'Codominio',
      significado:
        'conjunto de todos los posibles valores de salida de una función.',
    },
    {
      termino: 'Cociente',
      significado: 'resultado de dividir un número o expresión entre otro.',
    },
    {
      termino: 'Coeficiente',
      significado:
        'factor numérico que multiplica a una variable en una expresión algebraica.',
    },
    {
      termino: 'Concavidad',
      significado:
        'dirección hacia la cual se curva una función, ya sea hacia arriba (cóncava hacia arriba) o hacia abajo (cóncava hacia abajo).',
    },
    {
      termino: 'Constante',
      significado:
        'valor fijo que no cambia a lo largo de un problema o expresión matemática.',
    },
    {
      termino: 'Continuidad',
      significado:
        'propiedad de una función que indica que no tiene saltos o interrupciones en su gráfica.',
    },
    {
      termino: 'Creciente',
      significado:
        'función que aumenta su valor a medida que la variable independiente aumenta.',
    },
    {
      termino: 'Cuadrática',
      significado:
        'función polinómica de segundo grado, cuya gráfica es una parábola.',
    },
    {
      termino: 'Decreciente',
      significado:
        'función que disminuye su valor a medida que la variable independiente aumenta.',
    },
    {
      termino: 'Derivada',
      significado:
        'razón de cambio instantánea de una función con respecto a su variable independiente.',
    },
    {
      termino: 'Desigualdad',
      significado:
        'expresión matemática que compara dos cantidades utilizando los símbolos >, <, ≥ o ≤.',
    },
    {
      termino: 'Discontinuidad',
      significado: 'interrupción o salto en la gráfica de una función.',
    },
    {
      termino: 'Dominio',
      significado:
        'conjunto de todos los posibles valores de entrada o variable independiente de una función.',
    },
    {
      termino: 'Ecuación',
      significado:
        'igualdad matemática que establece que dos expresiones son equivalentes.',
    },
    {
      termino: 'Exponencial',
      significado:
        'función en la que la variable independiente aparece como exponente.',
    },
    {
      termino: 'Expresión algebraica',
      significado:
        'combinación de números, variables y operaciones que representa una cantidad o relación matemática.',
    },
    {
      termino: 'Función',
      significado:
        'relación entre dos conjuntos, donde cada elemento del primer conjunto (dominio) se asocia con un único elemento del segundo conjunto (codominio).',
    },
    {
      termino: 'Gráfica',
      significado:
        'representación visual de una función en un plano cartesiano.',
    },
    {
      termino: 'Inecuación',
      significado:
        'desigualdad que involucra una o más variables y que se cumple para un conjunto de valores de dichas variables.',
    },
    {
      termino: 'Intercepto',
      significado:
        'punto en el cual una línea o curva cruza un eje del plano cartesiano.',
    },
    {
      termino: 'Intervalo',
      significado:
        'conjunto de números reales comprendidos entre dos valores dados.',
    },
    {
      termino: 'Límite',
      significado:
        'valor al que se aproxima una función a medida que la variable independiente se acerca a un valor específico.',
    },
    {
      termino: 'Lineal',
      significado: 'función cuya gráfica es una línea recta.',
    },
    {
      termino: 'Logaritmo',
      significado:
        'exponente al que se debe elevar una base dada para obtener un número específico.',
    },
    {
      termino: 'Máximo',
      significado:
        'valor más alto que alcanza una función en un intervalo dado.',
    },
    {
      termino: 'Mínimo',
      significado:
        'valor más bajo que alcanza una función en un intervalo dado.',
    },
    {
      termino: 'Monomio',
      significado: 'expresión algebraica compuesta por un solo término.',
    },
    {
      termino: 'Parábola',
      significado:
        'curva simétrica en forma de u que resulta de la intersección de un cono con un plano paralelo a su generatriz.',
    },
    {
      termino: 'Polinomio',
      significado:
        'expresión algebraica compuesta por la suma de varios términos, cada uno de los cuales es el producto de una constante y una o más variables elevadas a exponentes enteros no negativos.',
    },
    {
      termino: 'Potencia',
      significado:
        'operación matemática que representa la multiplicación repetida de un número por sí mismo.',
    },
    {
      termino: 'Producto',
      significado:
        'resultado de multiplicar dos o más números o expresiones algebraicas.',
    },
    {
      termino: 'Raíz',
      significado:
        'valor que, elevado a una potencia dada, produce un número específico.',
    },
    {
      termino: 'Rango',
      significado:
        'conjunto de todos los posibles valores de salida o variable dependiente de una función.',
    },
    {
      termino: 'Recta',
      significado:
        'línea infinita que se extiende en ambas direcciones sin curvarse.',
    },
    {
      termino: 'Recíproco',
      significado:
        'número o expresión que resulta de dividir 1 entre otro número o expresión.',
    },
    {
      termino: 'Suma',
      significado:
        'resultado de adicionar dos o más números o expresiones algebraicas.',
    },
    {
      termino: 'Término',
      significado:
        'cada una de las partes que componen una expresión algebraica, separadas por los signos + o -.',
    },
    {
      termino: 'Valor absoluto',
      significado:
        'distancia de un número a cero en la recta numérica, sin considerar su signo.',
    },
    {
      termino: 'Variable',
      significado:
        'símbolo que representa un valor que puede cambiar dentro de un problema o expresión matemática.',
    },
    {
      termino: 'Vértice',
      significado:
        'punto en el cual una parábola cambia de dirección, ya sea de creciente a decreciente o viceversa.',
    },
  ],
}
