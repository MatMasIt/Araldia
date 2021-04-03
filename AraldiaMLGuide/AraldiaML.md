# AraldiaML

## Guida introduttiva alla programmazione in AraldiaML

### Mattia Mascarello

[TOC]

## Preambolo

AraldiaML è un linguaggio di markup basato su xml.

> XML è l'acronimo di eXtensible Markup Language.
>
> XML è stato progettato per archiviare e trasportare dati.
>
> XML è stato progettato per essere leggibile sia dall'uomo che dalla macchina.

AraldiaML contiene sia dati di gioco come le domande, gli scenari, gli eventi, i tipi di virus che si trovano in Araldia, sia elementi interattivi, quali effetti, porzioni di testo e decisioni che si attivano con modalità condizionali

 ## Excursus su XML

Un documento XML è composto da tag come questo 

```xml
<tag>
```

I tag possono contenere altri tag in una struttura gerarchica

per concludere il contenuto del tag occorre aggiungere un tag di chiusura

```xml
</tag>
```

>  Esempio
>  ```xml
>  <tag>
>  <tag2></tag2>
>  </tag>
>  ```

Oppure contenere del testo

```xml
<tag>
	<tag2>Testo</tag2>
</tag>
```



Alcuni tag non contengono alcun altro tag e quindi non necessitano di un tag di chisura,  ma contengono uno slash al loro termine

```xml
<tagNonChiuso />
```



I tag possono avere attributi

```xml
<tag1 attributo1="valore1" attributo2="valore2">
	<tag2 nome="Ciao">Testo</tag2>
</tag1>
```

```xml
<goto page="16" />
```

### Commenti

I commenti iniziano con `` <!-- `` e terminano con `` -->``

```xml
<!--
L'evento non è terminato
@Mattia
-->
```



## Documentazione

### Struttura

Qui è specificata la struttura del documento (attraverso alla gerarchia dei tag)

* Araldia

  Tag iniziale del documento

  * values

    Elenco dei valori di gioco

    * value

      Valore di gioco

      * name

        nome

      * title

        titolo

      * description

        descrizione

      * min

        minimo

      * max

        massimo

      * default

        default

      * colorZones

        Colore condizionale dell'indicatore

        * colorZone

          Colore specificato per un range di colori

          * min

            minimo del range

          * max

            massimo del range

          * color

            colore in [esadecimale](https://www.w3schools.com/cssref/css_colors.asp) (ex #FFFFF)

          * description

            descrizione dell'indicatore, visibile se lo si seleziona

      * triggers

        controlli da effettuare, contiene tag di controllo

  * sections

    Tutte le pagine del gioco

    * events

      * event,  frames= int, chance = int

        Evento casuale
        frames:  ogni quante azioni eseguire un sorteggio per l'evento

        chance: percentuale di probabilità che l'evento si verifichi

        * name
        * title
        * description
        * choices
          * choice
            * title
            * description (optional)
            * effects

    * scenes

      Scene (A differenza di domande ed eventi, possono essere solo invocate e non appaiono spontaneamente)

      * scene
      * name
      * title
      * description
      * choices
        * choice
          * title
          * description (optional)
          * effects

    * questions

      * name
      * title
      * description
      * choices
        * title
        * description (optional)
        * effects

  * viruses

    * virus
      * name
      * title
      * description
      * stats
        * transmissionSpeed (0-10)
        * lethality (0-10)
        * hospitalizationRate (0-10)
      * infoboxes
        * infobox
          * title
          * description

  * parties

    * party
      * name
      * title
      * description
      * motto

### Tag di controllo

#### \<if>

Operazioni condizionali

Comparatori:

* is
* lessThan
* moreThan
* lessOrEqual
* moreOrEqual

##### in \<value>

Inserito in \<triggers>, determina i check, comparando il valore corrente dell'indicatore con il criterio e il valore specificato nell' \<if>

Sintassi

```xml
<if is="0">
    azioni
</if>
<elseif lessThan ="50">
    azioni
</elseif>
<elseif moreThan="60">
    azioni
</elseif>
<else>
    azioni
</else>
```



###### All'inizio del blocco  \<event>

All'inizio del blocco: condizioni per mostrare o evitare il blocco

```xml
<if who="checkpoint" what="virusDeveloped" is="true" />
```

who -> target

what -> variabile

##### In altri luoghi

```xml
<if who="checkpoint" what="virusDeveloped" is="true" />
</if>
<elseif who="checkpoint" what="virusCritical" is="true" />
</elseif>
<else>
</else>
```



#### \<set>

```xml
<set who="virus" what="lethality" delta="-10" />
<set who="virus" what="lethality" delta="+10" />
<set who="virus" what="lethality" to="50" />
```



#### \<goto>

```xml
<goto question="question_name" />
<goto question="next" />
<goto scene="scene_name" />
<goto event="event_name" />
<!--
Goto event_name forza l'attivazione di un evento
-->
```



#### \<sectionGroup>

```xml
<sectionGroup atLeastOne="true" chance="100">
```

atLeastOne -> almeno una sezione del \<sectionGroup>

chance -> probabilità percentuale che il \<sectionGroup> venga eseguito

#### \<section>

chance -> probabilità percentuale che la sezione sia quella attivata nel \<sectionGroup>

#### \<print>

 Stampa una variabile

```xml
<print who ="virus" what="name" />
```

Elenco di variabili predefinite:

* who="user" what="name"
* who="virus" what="name"
* who="virus" what="transmissionSpeed"
* who="virus" what="lethality"
* who="virus" what="hospitalizationRate"
* I nomi dei \<value>, sotto il parametro \<name>

## Esempio

```xml
<?xml version="1.0" encoding="utf-8"?>
<Araldia>
	<values>
		<value>
			<name>health</name>
			<title>Salute</title>
			<description>Il livello di salute della popolazione. Un indicatore importante</description>
			<min>0</min>
			<max>100</max>
			<default>100</default>
			<colorZones>
				<colorZone>
					<min>0</min>
					<max>30</max>
					<color>red</color>
					<description>Beh, che dire...</description>
				</colorZone>
				<colorZone>
					<min>31</min>
					<max>50</max>
					<color>orange</color>
					<description>Dai...</description>
				</colorZone>
				<colorZone>
					<min>51</min>
					<max>60</max>
					<color>yellow</color>
					<description>Non male</description>
				</colorZone>
				<colorZone>
					<min>61</min>
					<max>100</max>
					<color>green</color>
					<description>Ok</description>
				</colorZone>
			</colorZones>
			<triggers>
				<if is="0">
					<goto scene="healthGameOver" />
				</if>
				<if lessThan="50">
					<goto scene="healthWarn" />
				</if>
			</triggers>
		</value>
	</values>
	<sections>
		<events>
			<event frames="3" chance="10">
				<if who="checkpoints" what="virusDeveloped" is="true" />
				<name>new_variant</name>
				<title>Nuova variante</title>
				<description>
					Il corriere della Pera annuncia l'arrivo di una nuova variante di <print what="virusName" />. La nuova variante è
					<sectionGroup atLeastOne="true" chance="100">
						<section chance="10">
							più letale del 10%
							<set who="virus" what="lethal" delta="+10" />
						</section>
						<section chance="10">
							meno letale del 10%
							<set who="virus" what="lethal" delta="-10" />
						</section>
					</sectionGroup>
				</description>
				<set who="checkpoints" what="virusMutated" to="true" />
				<choices>
					<choice>
						<title>Ho capito</title>
						<effects>
							<goto question="next" />
						</effects>
					</choice>
				</choices>
			</event>
		</events>
		<scenes>
			<scene>
				<name>fondi_europei_scuola</name>
				<title>Detto fatto</title>
				<description>
				<if who="checkpoints" what="consensus" lessThan="50">
					I tuoi alleati di governo ti guardano con disappunto.
					<set who="levels" what="school" delta="+5" />
					<set who="levels" what="consensus" delta="-5" />
				</if>
				<else>
					I docenti di tutte le scuole ti sorridono.
					<set who="levels" what="school" delta="+10" />
					<set who="levels" what="consensus" delta="+10" />
				</else>
			</description>
				<set who="checkpoints" what="virusMutated" to="true" />
				<choices>
					<choice>
						<title>Ok</title>
						<effects>
							<goto question="next" />
						</effects>
					</choice>
				</choices>
			</scene>
		</scenes>
		<questions>
			<question>
				<if who="checkpoints" what="virusDeveloped" is="true" />
				<name>fondi_europei_scuola</name>
				<title>Fondi Europei per la scuola</title>
				<description>
					L'unione Europea offre dei fondi per la scuola a patto di integrare i programmi scolastici con quelli degli altri stati
					<if who="checkpoints" what="consensus" lessThan="50">
					I tuoi alleati di governo ti guardano con disappunto.
				</if>
				</description>
				<set who="checkpoints" what="virusMutated" to="true" />
				<choices>
					<choice>
						<title>Certo</title>
						<goto scene="fondi_europei_scuola_yesno" />
					</choice>
					<choice>
						<title>Per niente!</title>
						<effects>
							<goto scene="fondi_europei_scuola_yesno" />
						</effects>
					</choice>
				</choices>
			</question>
		</questions>
	</sections>
<viruses>
	<virus>
		<name>eys</name>
		<title>eys-1</title>
		<description>Descrizione</description>
		<stats>
			<transmissionSpeed>1</transmissionSpeed>
			<lethality>1</lethality>
			<hospitalizationRate>1</hospitalizationRate>
		</stats>
		<infoboxes>
			<infobox>
				<title>Infobox1</title>
				<description>Testo</description>
			</infobox>
		</infoboxes>
	</virus>
</viruses>
<parties>
	<party>
		<name>partito_giallo</name>
		<title>Partito Giallo</title>
		<description>Whatever</description>
		<motto>For the many, not the few.</motto>
	</party>
</parties>
</Araldia>

```

