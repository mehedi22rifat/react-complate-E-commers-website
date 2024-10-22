import { button } from 'framer-motion/client';
import React from 'react'

const Question = () => {


  function filterFAQs() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const faqs = document.querySelectorAll('#faqList > li');

    faqs.forEach(faq => {
        const questionElement = faq.querySelector('.question');
        const answerElement = faq.querySelector('.answer');
        const question = questionElement.textContent.toLowerCase();
        const answer = answerElement.textContent.toLowerCase();

        if (question.includes(filter) || answer.includes(filter)) {
            faq.style.display = '';
            highlightText(questionElement, filter);
            highlightText(answerElement, filter);
        } else {
            faq.style.display = 'none';
        }
    });
}

function highlightText(element, filter) {
    const text = element.textContent;
    const regex = new RegExp(`(${filter})`, 'gi');
    const highlightedText = text.replace(regex, '<span class="highlight">$1</span>');
    element.innerHTML = highlightedText;
}

function toggleFAQ(button) {
    const answerDiv = button.nextElementSibling;
    answerDiv.classList.toggle('hidden');
}



 
  return (
   <div className='py-20 bg-sky-100'><div className="p-8 rounded shadow">
    <div className="flex pb-10 flex-col sm:flex-row justify-between items-center mb-6">
      <h1 className="md:text-5xl text-2xl font-bold mb-4 sm:mb-0">Frequently Asked Questions</h1>
      <input type="text" id="searchInput" onKeyUp={filterFAQs} placeholder="Search FAQs" className="w-full sm:w-1/3 p-2 mb-4 sm:mb-0 border rounded" />
    </div>
    <ul id="faqList">
      <li className="mb-4">
        <button className="w-full text-left p-4 bg-gray-100 rounded-t shadow hover:bg-gray-200" onClick={(e) => toggleFAQ(e.target)}>
          1. <span className="question">Why is a building called a 'building' if it's already built?</span>
        </button>
        <div className="p-4 bg-white border rounded-b shadow-inner hidden">
          <div className="answer">Great question! It's called a building because language is strange and full of mysteries. Much like the chicken or the egg dilemma, this one might keep you up at night!</div>
        </div>
      </li>
      <li className="mb-4">
        <button className="w-full text-left p-4 bg-gray-100 rounded-t shadow hover:bg-gray-200" onClick={(e) => toggleFAQ(e.target)}>
          2. <span className="question">If a word is misspelled in the dictionary, how would we ever know?</span>
        </button>
        <div className="p-4 bg-white border rounded-b shadow-inner hidden">
          <div className="answer">That's a conundrum! We'd probably just keep spelling it wrong until someone smarter than us noticed.</div>
        </div>
      </li>
      <li className="mb-4">
        <button className="w-full text-left p-4 bg-gray-100 rounded-t shadow hover:bg-gray-200" onClick={(e) => toggleFAQ(e.target)}>
          3. <span className="question">Why do we press harder on the remote control buttons when we know the batteries are dead?</span>
        </button>
        <div className="p-4 bg-white border rounded-b shadow-inner hidden">
          <div className="answer">It's the universal sign of hope and frustration combined. Also, we secretly believe that our sheer willpower can charge batteries.</div>
        </div>
      </li>
      <li className="mb-4">
        <button className="w-full text-left p-4 bg-gray-100 rounded-t shadow hover:bg-gray-200" onClick={(e) => toggleFAQ(e.target)}>
          4. <span className="question">Can a kangaroo jump higher than a house?</span>
        </button>
        <div className="p-4 bg-white border rounded-b shadow-inner hidden">
          <div className="answer">Absolutely! Houses can't jump, but kangaroos can jump really high. So, kangaroos win this one by default.</div>
        </div>
      </li>
      <li className="mb-4">
        <button className="w-full text-left p-4 bg-gray-100 rounded-t shadow hover:bg-gray-200" onClick={(e) => toggleFAQ(e.target)}>
          5. <span className="question">Why do we call it 'after dark' when it's really 'after light'?</span>
        </button>
        <div className="p-4 bg-white border rounded-b shadow-inner hidden">
          <div className="answer">Because humans like to make things confusing. It's a tradition!</div>
        </div>
      </li>
    </ul>
  </div>


 
</div>


  )
}

export default Question