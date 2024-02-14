import React, { useState } from 'react';
import { Ai } from '../Config/Ai';
const ChefBot = () => {
    const [userInput, setUserInput] = useState("");
    const [recipe, setRecipe] = useState("");
    const[loading,setLoading]=useState(false);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const resRecipe = await Ai(userInput)
        setRecipe(resRecipe)
        setLoading(false)
    }

    const renderRecipeSteps = () => {
        if (!recipe) return null;

        return recipe.split('\n').map((step, index) => (
            <p key={index}>{step}</p>
        ));
    }
    return (
        <>
            <div className='overflow-hidden'>
                <div className='text-center bg-black opacity-75 h-14'>
                    <h1 className='font-bold text-4xl text-white'>CHEFBOT</h1>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <h1 className='font-bold text-2xl mt-28'>Order Your Recipe</h1>
                    <form className="mt-4" onSubmit={handleSubmit}>
                        <input className="px-3 py-2 border border-gray-600 rounded-md mr-2" type="text" placeholder="Enter recipe name" value={userInput} onChange={handleInputChange} />
                        <div className='mt-4 '>
                            <button className='bg-black text-white px-3 mx-16 py-2 rounded-md hover:bg-gray-800 hover:border-gray-800'>Give me a recipe</button>
                        </div>
                    </form>
                </div>

                {loading && <div className="loader text-center font-bold">AI is Typing...</div>} 

                {recipe && (
                    <div className='bg-black sm:w-full lg:w-[50%]  mx-auto mt-14 h-[400px] rounded-lg px-4 py-3 text-white overflow-y-scroll '>
                        {renderRecipeSteps()}
                    </div>
                )}
            </div>
        </>
    );
}

export default ChefBot;
