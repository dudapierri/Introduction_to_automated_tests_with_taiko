/* globals gauge*/
"use strict";
const path = require('path');
const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    press,
    screenshot,
    above,
    click,
    checkBox,
    listItem,
    toLeftOf,
    link,
    text,
    into,
    textBox,
    evaluate,
    waitFor,
    button,
    below,
    toRightOf,
    scrollDown,
    scrollTo,
    hover,
    scrollUp,
    image,
    setConfig
} = require('taiko');
const assert = require("assert");
const { setPriority } = require('os');
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeScenario(async function()
{
    /*await setConfig(
        {
            waitForNavigation : false
        }
    )*/
    await openBrowser(
    {
        headless: false,
        
        args: [
            "--start-fullscreen"
        ]

    });
});

afterScenario( async function()
{
    await closeBrowser();
})
step("Acessar o site netshoes", async function()
{
    await  goto("https://www.netshoes.com.br/"); // goto - acessar 
    //await waitFor(3000);  //delay 
}
);

step("Clicar no link <btn> a direita de <btn2>", async function(btn,btn2)
{
    await click(link(btn), toRightOf(text(btn2)))
}) 
step("Clicar no link <btn>", async function(btn)
{
    await click(link(btn))
}) 
step("Preencher o txtbox abaixo de <ref>  com o valor <value>", async function(ref,value)
{
    
    await write(value, into(textBox(below(ref))))
}) 
step("Clicar no botao <btn>", async function(btn)
{
    await click(button(btn))
}) 
step("Pressionar a tecla <key>", async function(key)
{
    await press(key)
}) 

step("Passar o mouse em cima do texto <txt> e clicar no botao <btn>", async function (txt,btn)
{
    await scrollDown(200)
    await hover(txt)
    await click(button(btn))
}
)

step("Clicar no icone carrinho de compras", async function ()
{
    await scrollUp(200)
    await click(link({class:'mini-cart ns-icon ns-icon-cart'}))
}
)
step("Clicar no ícone Favoritar", async function ()
{
    await scrollDown(100)
    await click($(`class:'wishlist__heart__logo ns-icon ns-icon-wishlist-heart'`))
////i[@class='wishlist__heart__logo ns-icon ns-icon-wishlist-heart']
}
)
step("Clicar no caminho <txt>", async function (txt)
{   
     await scrollDown(250)
     await click(image(),above(link(txt)))
}
)
step("Clicar no caminho2 <txt>", async function (txt)
{   
     await scrollTo(txt)
     await scrollDown(50)
     await click(image(),above(link(txt)))
}
)

