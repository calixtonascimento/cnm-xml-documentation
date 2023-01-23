import{_ as t,c as e,o as d,a}from"./app.384b2e40.js";const y=JSON.parse('{"title":"Especificações tags dados imóvel","description":"","frontmatter":{},"headers":[],"relativePath":"arquivo/especificacoes/especificacoes-tags.md"}'),o={name:"arquivo/especificacoes/especificacoes-tags.md"},r=a('<h1 id="especificacoes-tags-dados-imovel" tabindex="-1">Especificações tags dados imóvel <a class="header-anchor" href="#especificacoes-tags-dados-imovel" aria-hidden="true">#</a></h1><table><thead><tr><th>NOME TAG</th><th style="text-align:center;">OBRIGATÓRIO</th><th style="text-align:center;">TIPO</th><th style="text-align:left;">DESCRIÇÃO</th></tr></thead><tbody><tr><td>referencia</td><td style="text-align:center;">SIM</td><td style="text-align:center;">string</td><td style="text-align:left;">Código de referencia do imóvel no sistema do cliente. Utilizado para identificação do imóvel na imobiliária e como código de referencia de integração no portal Chaves na mão.</td></tr><tr><td>codigo_cliente</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">string</td><td style="text-align:left;">Código do imóvel no sistema do cliente, pode ser o mesmo utilizado na tag “referencia” ou outro código de identificação interna no sistema do cliente.</td></tr><tr><td>link_cliente</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">string</td><td style="text-align:left;">Link do imóvel no site do cliente.</td></tr><tr><td>titulo</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">string</td><td style="text-align:left;">Título do imóvel colocado pelo cliente.</td></tr><tr><td>transacao</td><td style="text-align:center;">SIM</td><td style="text-align:center;">char(1)</td><td style="text-align:left;">Tipo de transação do imóvel</td></tr><tr><td>transacao2</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">char(1)</td><td style="text-align:left;">Tipo de transação secundária do imóvel (venda ou locação). Utilizar V para venda ou L para locação. Utilizar em casos de imóveis disponíveis tanto para venda quanto para locação</td></tr><tr><td>finalidade</td><td style="text-align:center;">SIM</td><td style="text-align:center;">char(2)</td><td style="text-align:left;">Finalidade do imóvel (residencial, comercial, rural). Utilizar RE para residencial, CO para comercial e RU para rural.</td></tr><tr><td>finalidade2</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">char(2)</td><td style="text-align:left;">Finalidade secundária do imóvel (residencial, comercial, rural). Utilizar RE para residencial, CO para comercial e RU para rural. Utilizar em casos de imóveis disponíveis para mais de uma finalidade. Caso o imóvel não possua duas finalidades deixar este campo vazio.</td></tr><tr><td>destaque</td><td style="text-align:center;">SIM</td><td style="text-align:center;">integer(1)</td><td style="text-align:left;">Informa se o imóvel deve aparecer em destaque no portal ou não. Utilizar 0 para não e 1 para sim.</td></tr><tr><td>tipo</td><td style="text-align:center;">SIM</td><td style="text-align:center;">string</td><td style="text-align:left;">Tipo do imóvel para a tag <code>finalidade</code>. Ver lista de tipos de imóveis suportados de acordo com sua finalidade no item 2.2 deste documento.</td></tr><tr><td>tipo2</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">string</td><td style="text-align:left;">Tipo do imóvel para a tag <code>finalidade2</code>. Ver lista de tipos de imóveis suportados de acordo com sua finalidade no item 2.2 deste documento. Caso o imóvel possua não possua duas finalidades, deixar este campo vazio.</td></tr><tr><td>valor</td><td style="text-align:center;">SIM</td><td style="text-align:center;">float</td><td style="text-align:left;">Valor do imóvel. Deve estar em formato float, com ponto <code>(.)</code> para casas decimais. Pode ser utilizado para informar tanto o valor de venda quanto de locação, caso o imóvel possua apenas um tipo de transação. Caso possua dois tipos de transações (venda ou locação), este campo deve ser utilizado para informar o valor de venda.</td></tr><tr><td>valor_locacao</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">float</td><td style="text-align:left;">Valor de locação do imóvel. Deve estar em formato float, com ponto <code>(.)</code> para casas decimais. Utilizar somente caso o imóvel esteja disponível tanto para venda quanto para locação.</td></tr><tr><td>valor_iptu</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">float</td><td style="text-align:left;">Valor do IPTU do imóvel. Deve estar em formato float, com ponto <code>(.)</code> para casas decimais.</td></tr><tr><td>valor_condominio</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">float</td><td style="text-align:left;">Valor do condomínio do imóvel. Deve estar em formato float, com ponto <code>(.)</code> para casas decimais.</td></tr><tr><td>area_total</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">float</td><td style="text-align:left;">Área total do imóvel. Deve estar em formato float, com ponto <code>(.)</code> para casas decimais.</td></tr><tr><td>area_util</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">float</td><td style="text-align:left;">Área útil do imóvel. Deve estar em formato float, com ponto <code>(.)</code> para casas decimais.</td></tr><tr><td>quartos</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">integer(3)</td><td style="text-align:left;">Quantidade de quartos do imóvel. Deve estar no formato de número inteiro. Pode possui até <code>3</code> caracteres.</td></tr><tr><td>suites</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">integer(2)</td><td style="text-align:left;">Quantidadedesuítesdo imóvel. Deve estar no formato de número inteiro. Pode possui até <code>2</code> caracteres.</td></tr><tr><td>garagem</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">integer(3)</td><td style="text-align:left;">Quantidade de garagens do imóvel. Deve estar no formato de número inteiro. Pode possui até <code>3</code> caracteres.</td></tr><tr><td>banheiro</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">integer(3)</td><td style="text-align:left;">Quantidade de banheiros do imóvel. Deve estar no formato de número inteiro. Pode possui até <code>3</code> caracteres.</td></tr><tr><td>closet</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">integer(2)</td><td style="text-align:left;">Quantidade de closets do imóvel. Deve estar no formato de número inteiro. Pode possui até <code>2</code> caracteres.</td></tr><tr><td>salas</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">integer(2)</td><td style="text-align:left;">Quantidade de salas do imóvel. Deve estar no formato de número inteiro. Pode possui até <code>2</code> caracteres.</td></tr><tr><td>despensa</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">integer(2)</td><td style="text-align:left;">Quantidade de despensas do imóvel. Deve estar no formato de número inteiro. Pode possui até <code>2</code> caracteres.</td></tr><tr><td>bar</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">integer(2)</td><td style="text-align:left;">Quantidade de bares do imóvel. Deve estar no formato de número inteiro. Pode possui até <code>2</code> caracteres.</td></tr><tr><td>cozinha</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">integer(2)</td><td style="text-align:left;">Quantidade de cozinhas do imóvel. Deve estar no formato de número inteiro. Pode possui até <code>2</code> caracteres.</td></tr><tr><td>quarto_empregada</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">integer(2)</td><td style="text-align:left;">Quantidade de quartos de empregada do imóvel. Deve estar no formato de número inteiro. Pode possui até <code>2</code> caracteres.</td></tr><tr><td>escritorio</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">integer(2)</td><td style="text-align:left;">Quantidade de escritórios do imóvel. Deve estar no formato de número inteiro. Pode possui até <code>2</code> caracteres.</td></tr><tr><td>area_servico</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">integer(2)</td><td style="text-align:left;">Quantidade de áreas de serviço do imóvel. Deve estar no formato de número inteiro. Pode possui até <code>2</code> caracteres.</td></tr><tr><td>lareira</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">integer(2)</td><td style="text-align:left;">Quantidade de lareiras do imóvel. Deve estar no formato de número inteiro. Pode possui até <code>2</code> caracteres.</td></tr><tr><td>varanda</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">integer(2)</td><td style="text-align:left;">Quantidade de varandas e/ou sacadas do imóvel. Deve estar no formato de número inteiro. Pode possui até <code>2</code> caracteres.</td></tr><tr><td>lavanderia</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">integer(2)</td><td style="text-align:left;">Quantidade de lavanderias do imóvel. Deve estar no formato de número inteiro. Pode possui até <code>2</code> caracteres.</td></tr><tr><td>estado</td><td style="text-align:center;">SIM</td><td style="text-align:center;">char(2)</td><td style="text-align:left;">Estado (uf – unidade da federação) do endereço do imóvel. Deve estar abreviado (com dois caracteres), como utilizado de forma oficial pelo Governo Federal. <br><a target="_blank" rel="noopener noreferrer" href="/arquivo/dados-suportados/estados-suportados">(LINK AQUI)</a></td></tr><tr><td>cidade</td><td style="text-align:center;">SIM</td><td style="text-align:center;">string</td><td style="text-align:left;">Nome da cidade do imóvel.</td></tr><tr><td>bairro</td><td style="text-align:center;">SIM</td><td style="text-align:center;">string</td><td style="text-align:left;">Nome do bairro do imóvel.</td></tr><tr><td>cep</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">string(9)</td><td style="text-align:left;">CEP do endereço do imóvel, pode conter somente números, ou estar formato de acordo com a formatação oficial utilizada pelos Correios. Máximo de <code>9</code> (nove) caracteres.</td></tr><tr><td>endereco</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">string(200)</td><td style="text-align:left;">Endereço do imóvel, sem o bairro, número e complemento. Somente o logradouro do imóvel deve ser enviado neste campo. Máximo de <code>200</code> (duzentos) caracteres.</td></tr><tr><td>numero</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">string(10)</td><td style="text-align:left;">Número do imóvel no endereço. Máximo de <code>10</code> (dez) caracteres.</td></tr><tr><td>complemento</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">string(50)</td><td style="text-align:left;">Complemento do número do imóvel no endereço. Máximo de <code>20</code> (vinte) caracteres.</td></tr><tr><td>descritivo</td><td style="text-align:center;">SIM</td><td style="text-align:center;">text</td><td style="text-align:left;">Descrição do imóvel. Tamanho máximo de <code>3000</code> caracteres.</td></tr><tr><td>fotos_imovel</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">TAG</td><td style="text-align:left;">Depende da tag <code>foto</code>, <code>url</code> e <code>data_atualizacao</code> dentro da mesma, ver especificações de seu conteúdo no item: <br><a target="_blank" rel="noopener noreferrer" href="/arquivo/especificacoes/especificacoes-fotos">(LINK AQUI)</a></td></tr><tr><td>data_atualizacao</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">datetime</td><td style="text-align:left;">Data de cadastro ou data da última atualização do imóvel no sistema do cliente. Priorizar o informe da data de última atualização, casoexistente no sistema. Formato data/hora suportado: AAAA-MM-DD HH:MM:SS (ex: 2021-10-10 12:00:00). conteúdo no item: <br><a target="_blank" rel="noopener noreferrer" href="/arquivo/especificacoes/especificacoes-fotos">(LINK AQUI)</a></td></tr><tr><td>latitude</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">string</td><td style="text-align:left;">Coordenada geográfica latitude do endereço do imóvel. Deve ser informado no padrão utilizado pelo Google (ex: -49.1829).</td></tr><tr><td>longitude</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">string</td><td style="text-align:left;">Coordenada geográfica longitude do endereço do imóvel. Deve ser informado no padrão utilizado pelo Google (ex: -25.4026).</td></tr><tr><td>video</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">string</td><td style="text-align:left;">Link do vídeo no Youtube, Deve ser colocado o link para acessar o vídeo normalmente pelo navegador. <b>Não pode ser utilizado embed.</b></td></tr><tr><td>area_comum</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">TAG</td><td style="text-align:left;">Deve ser colocado os itens de área comum existentes no imóvel. <b>Ver especificações de seu conteúdo no item: <br><a target="_blank" rel="noopener noreferrer" href="/arquivo/especificacoes/especificacoes-area-comum">(LINK AQUI)</a></b></td></tr><tr><td>area_privativa</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">TAG</td><td style="text-align:left;">Deve ser colocado os itens de área comum existentes no imóvel. <b>Ver especificações de seu conteúdo no item <br><a target="_blank" rel="noopener noreferrer" href="/arquivo/especificacoes/especificacoes-area-privativa">(LINK AQUI)</a></b></td></tr><tr><td>aceita_troca</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">integer(1)</td><td style="text-align:left;">Informa se o imóvel aceita trocas ou não. 0 para não e 1 para sim. Caso não seja informado será considerado que o imóvel não aceita trocas.</td></tr><tr><td>periodo_locacao</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">integer(1)</td><td style="text-align:left;">Período de locação Apenas enviar campo quando em caso de locação informando os valores inteiros em cada caso:<br> 1 - Por Mês<br> 2 - Por Dia <br>3 - Por Ano <br>4 - Por Semana Exemplo: <br>Caso periodo de locação por dia: utilizaria o número 2 no meio da tag.</td></tr><tr><td>esconder_endereco_imovel</td><td style="text-align:center;">NÃO</td><td style="text-align:center;">integer(1)</td><td style="text-align:left;">Caso o campo venha com valor 1 os dados de endereço do imóvel não serão exibidos no portal. (permitido apenas 0 ou 1)</td></tr></tbody></table>',2),i=[r];function l(n,s,c,m,g,x){return d(),e("div",null,i)}const p=t(o,[["render",l]]);export{y as __pageData,p as default};
