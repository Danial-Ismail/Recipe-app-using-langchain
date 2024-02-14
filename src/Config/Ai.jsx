import { ChatOpenAI } from "@langchain/openai";
import {ChatPromptTemplate,SystemMessagePromptTemplate,HumanMessagePromptTemplate} from "@langchain/core/prompts"
import API_KEY from "../utils/apiKey";



export const Ai=async(userInput)=>{
const apiKey=API_KEY
const chat=new ChatOpenAI({openAIApiKey:apiKey})
const SystemMessage=SystemMessagePromptTemplate.fromTemplate("Your name is Chippa The Chef You are one of the best chef in hometown so first introduce yourself that you are chippa the chef you can give any type of food recipe and you ae only allowed to give the recipe related queries and show the ingredients in numbered list and same goes for description.If you don't know the answer tell them that i don't know the answer")
const HumanMessage=HumanMessagePromptTemplate.fromTemplate("{order_recipe}")

const chatPrompt=ChatPromptTemplate.fromMessages([
    SystemMessage,HumanMessage
])
const completeChatPrompt=await chatPrompt.formatMessages({
    order_recipe:userInput
})

// console.log("CompleteChatPrompt:" , completeChatPrompt)
const res= await chat.invoke(completeChatPrompt)
return res.content
}