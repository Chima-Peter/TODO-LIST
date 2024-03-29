export function changeQuote (quote) {
  const actionQuotes = [
    "Start small, dream big.",
    "The difference between ordinary and extraordinary is that little extra.",
    "Every strike brings me closer to the next home run.",
    "Don't wait for the perfect moment, take the moment and make it perfect.",
    "The journey of a thousand miles begins with a single step.",
    "The best way to get started is to quit talking and begin doing.",
    "Focus on progress, not perfection.",
    "Make each day your masterpiece.",
    "Don't let yesterday take up too much of today.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "It is during our darkest moments that we must focus to see the light.",
    "Believe you can and you're halfway there.",
    "The best way to predict your future is to create it.",
    "Defeat is not the opposite of success. It's part of it.",
    "You are never too old to set another goal or to dream a new dream.",
    "Action is the foundational key to all success.",
    "Discipline is the bridge between goals and accomplishments.",
    "The path to success is paved with action, not excuses.",
    "Procrastination is the thief of time.",
    "Don't let the fear of striking out keep you from playing the game.",
    "Progress, not perfection, is the key to success.",
    "Big goals require small steps.",
    "The only person you are destined to become is the person you decide to be.",
    "Your actions speak so loudly, I can't hear what you're saying.",
    "What you do speaks so loud that I can't hear what you say.",
    "It is not what happens to you that matters, but how you react to what happens to you.",
    "The truth of a man is not what he is said to be, but what he does.",
    "Character is what you do when no one is watching.",
    "The best revenge is massive success.",
    "The only way to do great work is to love what you do.",
    "If you can dream it, you can do it.",
    "There are no shortcuts to success. It takes hard work and dedication.",
    "The difference between successful people and others is not a lack of strength, not a lack of knowledge, but rather a lack of will.",
    "The man who moves a mountain begins by carrying away small stones.",
    "You don't have to be great to start, but you have to start to be great.",
    "The side hustle is the new hustle.",
    "The only person you are destined to compete with is the person you were yesterday.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "It's not about how many times you fall, but how many times you get back up.",
    "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
    "Stay foolish, stay hungry.",
    "The mind is everything. What you think you become.",
    "The two most important days in your life are the day you are born and the day you find out why.",
    "Whether you think you can or you think you can't, you're right.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Our greatest glory is not in never falling, but in rising every time we fall.",
    "The difference between ordinary and extraordinary is that little extra.",
    "Don't be afraid to give up the good to go for the great.",
    "If you're not embarrassed by the first version of your product, you've launched too late.",
    "Done is better than perfect.",
    "You miss 100% of the shots you don't take.",
    "The only way to do great work is to love what you do.",
    "I'm not a businessman. I'm a business, man.",
    "A goal without a plan is just a wish.",
    "The key is to set realistic goals and then work like hell to achieve them.",
    "The mind is everything. What you think you become.",
    "The best revenge is massive success.",
    "The only way to do great work is to love what you do.",
    "If you can dream it"
    ]
  
  quote.textContent = actionQuotes[Math.floor(Math.random() * actionQuotes.length)]  ;
}