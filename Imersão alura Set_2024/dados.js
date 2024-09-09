const characters = [
    {
       nome: 'Mario',
       descricao: 'Os heróis do Reino do Cogumelo. São medianos em todas as áreas. Quando controlados pela CPU, usam apenas a Estrela.',
       link:'https://pt.wikipedia.org/wiki/Mario_(personagem)'
    },
    {
        nome: 'Luigi',
        descricao: 'Os heróis do Reino do Cogumelo. São medianos em todas as áreas. Quando controlados pela CPU, usam apenas a Estrela.',
        link:'https://pt.wikipedia.org/wiki/Luigi_(personagem)'
     },
     {
        nome: 'Princesa Peach',
        descricao: 'A Princesa do Reino do Cogumelo tem como qualidade a excelente aceleração. É mediana na direção e no peso. Entretanto, é a menos veloz do jogo. Quando controlada pela CPU, lança cogumelos venenosos, que diminuem o tamanho do oponente que tocá-los.',
        link:'https://pt.wikipedia.org/wiki/Princesa_Peach'
     },
     {
        nome: 'Yoshi',
        descricao: 'O simpático dinossauro de Super Mario World reúne as mesmas características de Toadstool. Quando controlado pela CPU, lança ovos verdes, atingindo os karts com o mesmo efeito dos cascos.',
        link:'https://pt.wikipedia.org/wiki/Yoshi'
     },
     {
        nome: 'Bowser',
        descricao: 'O Rei dos Koopas tem como qualidades a mais alta velocidade e o maior peso. Entretanto, a aceleração e o controle de direção são péssimos. Quando controlado pela CPU, Bowser lança Lill Sparkys, bolas de fogo que atingem os karts com o mesmo efeito dos cascos.',
        link:'https://pt.wikipedia.org/wiki/Bowser'
     },
     {
        nome: 'Donkey Kong Jr.',
        descricao: 'O filho do Donkey Kong original e protagonista do jogo de mesmo nome surge pela primeira e última vez na série Mario Kart. É um gorila pequeno. Reúne as mesmas características de Bowser. Entretanto, quando controlado pela CPU, lança bananas.',
        link:'https://donkey-kong.fandom.com/pt/wiki/Donkey_Kong_Jr.'
     },
     {
        nome: 'Koopa Troopa',
        descricao: 'O soldado da Tropa Koopa, tem como qualidade o ótimo controle de direção. São medianos na aceleração e na velocidade. Seu peso baixo faz com que a tartaruga seja constantemente empurrada pelos oponentes mais fortes. Quando controlado pela CPU, lança cascos verdes.',
        link:'https://universomario.fandom.com/pt/wiki/Koopa_Troopa'
     },
     {
        nome: 'Toad',
        descricao: 'O servo de Toadstool reúne as mesmas características do Koopa Troopa. Quando controlado pela CPU, lança cogumelos venenosos, assim como Peach',
        link:'https://mario-bros.fandom.com/pt-br/wiki/Toad'
     }
];

const tracks = [
    {
        name:'Mario Circuit 1',
        description:'A típica, básica e boba primeira fase, não há quase nada que te incomodo, tem um cano aqui ou lá e acho que só. Na penúltima curva antes da largada, caso esteja com Cogumelo ou Estrela você pode passar pela terra e ganhar tempo.'
    },
    {
        name:'Donut Plains 1',
        description:'Aproveite enquanto as coisas ainda são fáceis, por mais que seja um pouco pior que a anterior está é outra pista bem básica. Se você olhar na primeira curva depois da ponte vai ver um buraco entre as barreiras de proteção, com um item que aumente sua velocidade você pode usar este atalho. Um perigo dessa fase são os cascos verdes, como a pista é fechada eles vão quicar até acertar alguém.'
    },
    {
        name:'Ghost Valley 1',
        description:'Esta fase é bem legal, porém mais difícil que as anteriores, cair aqui é uma grande realidade, depois de um choque a parede cai e em certos pontos nem tem parede. Tem um atalho explicito no mapa. Para chegar nele você deve usar a pela ou estar em alta velocidade e apertar L ou R para pular.'
    },
    {
        name:'Bowser Castle 1',
        description:'A coisa começa a ficar mais complicada, mas se acha esta fase difícil então terá dificuldades enormes no futuro. Não há atalhos que um jogador comum possa pegar nessa fase e devido as paredes o uso de itens é complicado, na hora dos saltos cuidado para não pular torto, se não a lava será seu destino. Vale comentar os Thowmps (aquelas pedras com rosto), se te pegarem seu kart será esmagado'
    },
    {
        name:'Mario Circuit 2',
        description:'Uma versão turbinada da primeira pista. Muito fácil, com turbos você pode cortar muitos dos caminhos da pista pela terra. O final tem um salto e se cair no meio vai voltar pra metade da pista, tome cuidado. Nesse local você pode usar o turbo para ir mais longe, entre nele meio de lado e pule. Outra coisa sobre esse turbo, se você colocar uma banana nele algum piloto pode escorregar e perder muito tempo para maio precisão veja aonde os pilotos estão passando, normalmente e pela direita do turbo. Eu não sei dizer se é possível ir do meio ao fim da pista usando uma pena no local do salto, talvez as penas não aparecem nessa fase.'
    },
    {
        name:'Choco Island 1',
        description:'A pista é chata, mais ainda não está difícil. Com turbos você pode ignorar várias curvas inda pela terra, mas cuidado com ela, essa fase é a pior para se sair da pista. No meio temos um pouco de lama, aqui não será um problema, mas na Choco Island 2.'
    },
    {
        name:'Ghost Valley 2',
        description:'Não tem quase nada de diferente em relação a Ghost Valley, apenas fique ligado com o turbo no fim da fase, ele pode ser salvador.'
    },
    {
        name:'Donut Plains 2',
        description:'Aqui outro inimigo comum da série é encontrado, as toupeiras, se passar por uma delas, ele te agarrará, para tirar ela dalí pule repetidamente várias vezes, ou caia na água. Um bom atalho aqui é a água, se você usar um Cogumelo a pular quando estiver perto da água vai pular por ela e chegar do outro lado da margem.'
    },
    {
        name:'Bowser Castle 2',
        description:'A pista fica muito pior do que a anterior, além de uma certa escolha de caminhos, eu recomendo que siga aquela que achar melhor, mas na dúvida diga o que a maioria dos corredores fizer. Existe um atalho um pouco antes da parte onde se escolhe o caminho, você pode ver pelo mapa, mas só da pra usar essa parte com a pena ou talvez com um pulo turbinado.'
    },
    {
        name:'Mario Circuit 3',
        description:'Mesmo sendo simples como todas as Mario Circuits, esta fase é um pouco mais difícil do que parece, mas isso é questão de pilotagem. Preste atenção nas barreiras, no meio da pista tem uma falhe que pode ser usada como atalho, mas só com turbos.'
    },
    {
        name:'Koopa Beach 1',
        description:'A fase possui três tipos de piso: areia, água rasa e água funda. A areia permite que você ande em velocidade comum, a água rasa te atrasa um pouco e a funda conta como queda da fase(a menos que seja rápido o suficiente para voltar). Um segredo importante é que ao usar um turbo você pode passar até mesmo na água funda, mas por pouco tempo, isso pode ajudar a cortar trilhas, mas é bem arriscado.'
    },
    {
        name:'Choco Island 2',
        description:'Um das fases mais chatas. A pista não te da quase controle nenhum controle. Tem um grande “mapa do Brasil” de lama no meio que é a pior parte. A dica é tentar fazer as curvas com a maior calma possível, você pode cortar um caminho num buraco na barreira da fase no inicio, mas só vale a pena se tiver um turbo.'
    },
    {
        name:'Vanilla Lake 1',
        description:'Não gosta da Choco Island então agora ferrou, alem de toda pista ser completamente escorregadia as pequenas poças d’água são um convite a inúmeras quedas, correr na parte de neve vai desacelerar seu kart, apesar do gelo ser escorregadio ele é o local mais rápido da pista. Sua maior vantagem aqui é a sorte da fase ser um quadrado, caso contrário seria muito pior.'
    },
    {
        name:'Bowser Castle 3',
        description:'Você já deve ter se acostumado, as coisas ficam só um pouco pior. Nos saltos fique sempre reto, se vir torto vai cair na água. No meio da pista tem um caminho triplo, se ir pelo meio poderá pegar 2 itens, então vale usar esse caminho as vezes, caso não queria siga o caminho que todos os outros pilotos seguem.  Cuidado também com os Thwomp esses foram posicionado para te sacanearem.</'
    },
    {
        name:'Mario Circuit 4',
        description:'Não muda muito em relação a Mario Circuit 3, vale apenas lembrar que se tiver com turbo você pode passar reto na penúltima curva, para isto passe pela terra entre um buraco na barreira. O mais importante, com uma pena você pode pular metade da pista facilmente.'
    },
    {
        name:'Donut Plains 3',
        description:'A marca nítida da fase são as pontes, duas pra ser mais preciso. Na primeira não há nada de mais, na segunda eu recomendo que pule na parte onde ela tem uma falha para não cair. As toupeiras também voltam nessa pista, então é mais uma coisa a se preocupar.'
    },
    {
        name:'Koopa Beach 2',
        description:'Fácil, fácil, não tem nada muito relevante para comentar. Se tiver um turbo você pode usar para passar reto na penúltima curva, e na parte no meio da água o melhor caminho é aquele onde se passa pela pequena ilha.'
    },
    {
        name:'Ghost Valley 3',
        description:'Igual as Ghost Valleys anteriores, só que com menos barreiras de contenção e mais buracos, cair é seu único risco. Existe um turbo na fase, ele é bem útil e arriscado de se pegar, mas se for bom o pastante pra pegar sem cair depois será muito útil.'
    },
    {
        name:'Vanilla Lake 2',
        description:'Não é tão difícil quanto parece, mas é bem chata. Corte caminhos pelas pontas de água, se quiser maior garantia, pule antes de passar por elas, turbos são uma boa fonte para explorar atalhos. Lembre-se a pista é escorregadia e tem alguns blocos de gelo em seu caminho.'
    },
    {
        name:'Rainbow Road',
        description:'A mais legal do jogo, não necessariamente difícil, mas como não há barreiras na pista este é a mais fácil de  se cair. Devido o coloração do chão, quase não da pra se ver os pontos de itens e moedas. Também existem alguns Thowmps, mas não são o principal problema da fase.'
    }
]