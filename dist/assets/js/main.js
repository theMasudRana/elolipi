var sourceText = [
    // "রাজস্থানের স্পিকার সিপি জোশীর সঙ্গে সচিন পাইলটের লড়াই এ বার পৌঁছতে চলেছে সুপ্রিম কোর্টে।",
    // "রাজ্যে সাংবিধানিক সঙ্কট তৈরি হতে চলেছে বলে শীর্ষ আদালতের আবেদনে জানাতে চলেছেন সিপি জোশী।",
    // "বিদ্রোহী সচিন এবং তাঁর অনুগামীদের বিধায়ক পদ কেন খারিজ করা হবে না, তা জানতে চেয়ে নোটিস দিয়েছিলেন স্পিকার।",
    // "হাইকোর্টে সেই নোটিসকে চ্যালেঞ্জ জানিয়েছিলেন সচিনরা। শুক্রবার সেই মামলার রায় ঘোষণা হবে বলে জানিয়েছে আদালত।",
    // "তবে তত দিন পর্যন্ত সচিন ও বিদ্রোহী বিধায়কদের বিরুদ্ধে কোনও ব্যবস্থা নেওয়া যাবে না বলে নির্দেশ দেওয়া হয়েছে।",
    // "হাইকোর্টের এই নির্দেশের বিরুদ্ধেই সুপ্রিম কোর্টে যাওয়ার সিদ্ধান্ত নিয়েছেন সিপি জোশী।",
    // "রাজস্থানের স্পিকার সিপি জোশীর সঙ্গে সচিন পাইলটের লড়াই এ বার পৌঁছতে চলেছে সুপ্রিম কোর্টে।",
    // "রাজ্যে সাংবিধানিক সঙ্কট তৈরি হতে চলেছে বলে শীর্ষ আদালতের আবেদনে জানাতে চলেছেন সিপি জোশী।",
    // "বিদ্রোহী সচিন এবং তাঁর অনুগামীদের বিধায়ক পদ কেন খারিজ করা হবে না, তা জানতে চেয়ে নোটিস দিয়েছিলেন স্পিকার।",
    // "হাইকোর্টে সেই নোটিসকে চ্যালেঞ্জ জানিয়েছিলেন সচিনরা। শুক্রবার সেই মামলার রায় ঘোষণা হবে বলে জানিয়েছে আদালত।",
    // "তবে তত দিন পর্যন্ত সচিন ও বিদ্রোহী বিধায়কদের বিরুদ্ধে কোনও ব্যবস্থা নেওয়া যাবে না বলে নির্দেশ দেওয়া হয়েছে।",
    // "হাইকোর্টের এই নির্দেশের বিরুদ্ধেই সুপ্রিম কোর্টে যাওয়ার সিদ্ধান্ত নিয়েছেন সিপি জোশী।"

    // "শিয়াল ভাবে,‘বাঘমামা, দাড়াঁও তোমাকে দেখাচ্ছি!’",
    // "এখন সে আর নরহরি দাসের ভয় তার পুরোনো গর্তে যায় না, সে একটা নতুন গর্ত খুজে বার করেছে।",
    // "সেই গর্তের কাছে একটা কুয়ো ছিল।",
    // "একদিন শিয়াল নদির ধারে একটা মাদুর দেখতে পেয়ে, সেটাকে তার বাড়িতে নিয়ে এল।",
    // "এনে, সেই কুয়োর মুখের উপর তাকে বেশ করে বিছিয়ে বাঘকে গিয়ে বললে,’মামা, আমার নতুন বাড়ি দেখতে গেলে না?’",
    // "শুনে বাঘ তখুনি তার নতুন বাড়ি দেখতে এল।",
    // "শিয়াল তাকে সেই কুয়োর মুখে বিছানো মাদুরটা দেখিয়ে বললে, ‘মামা, একটু বস, জলখাবার খাবে।’",
    // "জলখাবারের কথা শুনে বাঘ ভরি খুশি হয়ে, লাফিয়ে সেই মাদুরের উপর বসতে গেল, আর অমনি সে কুয়োর ভিতরে পড়ে গেল।",
    // "তখন শিয়াল বললে, ‘মামা, খুব করে জল খাও, একটুও রেখ না যেন!’",
    // "সেই কুয়োর ভিতরে কিন্তু বেশি জল ছিল না, তাই বাঘ তাতে ডুবে মারা যায়নি।",
    // "সে আগে খুবই ভয় পেয়েছিল, কিন্তু শেষে অনেক কষ্টে উঠে এল।",
    // "উঠেই সে বললে, ‘কোথায় গেলি রে শিয়ালের বাচ্চা? দাঁড়া তোকে দেখাচ্ছি।’",
    // "কিন্তু শিয়াল তার আগেই পালিয়ে গিয়েছিল, তাকে কিছুতেই খুঁজে পাওয়া গেল না।",
    "তোমরা গান গাইতে পার? আমি একজন লোকের কথা বলব, সে একটা গান গাইতে পারত।",
    "তার নাম ছিল গুপি কাইন, তার বাবার নাম ছিল কানু কাইন।",
    "তার একটা মুদীর দোকান ছিল।",
    "গুপি কিনা একটা গান গাইতে পারত, আর সে গ্রামের আর কেউ কিছু গাইতে পারত না, তাই তারা তাকে খাতির করে বলত গুপি ‘গাইন’।",
    "গুপি যদিও একটা বই গান জানত না, কিন্তু সেই একটা গান সে খুব ক’রেই গাইত;",
    "সেটা না গেয়ে সে তিলেকও থাকতে পারত না, তার দম আটকে আসত।",
    "যখন সে ঘরে ব’সে গাইত, তখন তার বাবার দোকানের খদ্দের সব ছুটে পালাত।",
    "যখন সে মাঠে গিয়ে গান গাইত, তখন মাঠের যত গরু সব দড়ি ছিঁড়ে ভাগত।",
    "শেষে আর তার ভয়ে তার বাবার দোকানে খদ্দেরই আসে না, রাখালেরাও মাঠে গরু নিয়ে যেতে পারে না।",
    "তখন একদিন কানু কাইন তাকে এই বড় বাঁশ নিয়ে তাড়া করতে সে ছুটে মাঠে চ’লে গেল;",
    "সেখানে রাখালের দল লাঠি নিয়ে আসতে বনের ভিতর গিয়ে খুব ক’রে গলা ভাঁজতে লাগল।",
    "গুপিদের গ্রমের কাছেই আরেকটা গ্রামে একজন লোক থাকত, তার নাম ছিল পাঁচু পাইন।",
    "পাঁচুর ছেলেটির বড্ড ঢোলক বাজাবার শখ ছিল।",
    "বাজাতে বাজাতে সে বিষম ঢুলতে থাকত, আর পা নাড়ত আর চোখ পাকাত, আর দাঁত খিঁচোত, আর ভ্রূকুটি করত।",
    "তার গ্রামের লোকেরা তা দেখে হাঁ ক’রে থাকত আর বলত, ‘আহা! আ-া-া!! অ-অ-অ-হ্-হ্-হ্!!!’",
    "শেষে যখন ‘হাঃ, হাঃ, হা-হা!’ ব’লে বাঘের মত খেঁকিয়ে উঠত, তখন সকলে পালাবার ফাঁক না পেয়ে চিৎপাত হয়ে প’ড়ে যেত।",
    "তাই থেকে সকলে তাকে বলত ‘বাঘা বাইন।’ তার এই বাঘা নামই রটে গিয়েছিল; আসল নাম যে তার কি, তা কেউ জানত না।",
    "বাঘা ঢোলক বাজাত আর রোজ একটা ক’রে ঢোলক ভাঙত।",
    "শেষে আর পাঁচু তার ঢোলকের পয়সা দিয়ে উঠতে পারে না।",
    "কিন্তু বাঘার বাজনা বন্ধ হবে, তাও কি হয়?",
    "গ্রামের লোকেরা পাঁচুকে বলল, ‘তুমি না পার, নাহয় আমরাই সকলে চাঁদা ক’রে ঢোলকের পয়সাটা দি।",
    "আমাদের গ্রামে এমন একটা ওস্তাদ হয়েছে, তার বাজনাটা বন্ধ হয়ে যাবে!’",
    "শেষে ঠিক হল যে গ্রামের সকলে চাঁদা ক’রে বাঘাকে একটা ঢোলক কিনে দেবে, আর সেই ঢোলকটি আর তার ছাউনি খুব মজবুত হবে, যাতে বাঘার হাতেও আর সেটা সহজে না ছেঁড়ে।",
    "সে যা ঢোলক হল! তার মুখ হল সাড়ে-তিন হাত চওড়া, আর ছাউনি মোষের চামড়ার। বাঘা সেটা পেয়ে যার পর নাই খুশি হয়ে বললে, ‘আমি দাঁড়িয়ে বাজাব।’",
    "তখন থেকে সে দাঁড়িয়ে দাঁড়িয়ে সেই ঢোলক লাঠি দিয়ে বাজায়।",
    "দেড় মাস দিনরাত বাজিয়েও বাঘা সেটাকে ছিঁড়তে পারল না।",
    "ততদিনে তার বাজনা শুনে শুনে তার বাপ মা পাগল হয়ে গেল, গ্রামের লোকের মাথা ঘুরতে লাগল।",
    "আর দিনকতক এইভাবে চললে কি হত বলা যায় না।",
    "এর মধ্যে একদিন গ্রামের সকলে মিলে মোটা মোটা লাঠি নিয়ে এসে বাঘাকে বললে, ‘লক্ষ্মী, দাদা! তোমাকে দশ হাঁড়ি মিঠাই দিচ্ছি, অন্য কোথাও চ’লে যাও, নইলে আমরা সবাই পাগল হয়ে যাব!’",
    "বাঘা আর কী করে?",
    "তখন কাজেই তাকে অন্য একটা গ্রামে চলে যেতে হল।",
    "সেখানে দুদিন না থাকতে থাকতেই সেখানকার সকলে মিলে তাকে গ্রাম থেকে বার করে দিল।",
    "তারপর থেকে সে যেখানেই যায়, সেখান থেকেই তাকে তাড়িয়ে দেয়।",
    "তখন সে করল কী, সারাদিন মাঠে মাঠে ঘুরে বেড়ায়, ক্ষুধার সময় তার নিজের গ্রামে গিয়ে ঢোলক বাজাতে থাকে, আর গ্রামের লোক তাড়াতাড়ি তাকে কিছু খাবার দিয়ে বিদায় করে বলে, ‘বাঁচলাম!’",
    "তারপর এমন হল যে আর কেউ তাকে খেতে দেয় না।",
    "আর তার ঢোলকের আওয়াজ শুনলেই আশপাশের সকল গ্রামের লোক লাঠি নিয়ে আসে।",
    "তখন বেচারা ভাবল, ‘আর না! মূর্খদের কাছে থাকার চেয়ে বনে চলে যাওয়াই ভালো।",
    "না হয় বাঘে খাবে, তবুও আমার বাজনা চলবে।’",
    "এই বলে বাঘা তার ঢোলকটিকে ঘাড়ে করে বনে চলে গেল।",
    "এখন বাঘার বেশ মজাই হয়েছে।",
    "এখন আর কেউ তার বাজনা শুনে লাঠি নিয়ে আসে না।",
    "বাঘে খাবে দূরে থাক, সে বনে বাঘ-ভালুক কিছু নেই।",
    "আছে খালি একটা ভয়ানক জানোয়ার;",
    "বাঘা আজও তাকে দেখতে পায়নি, শুধু দূর থেকে তার ডাক শুনে ভয়ে থরথরিয়ে কাঁপে, আর ভাবে, ‘বাবা গো।",
    "ওটা এলেই তো ঢোলকসুদ্ধ আমাকে গিলে খাবে!’",
    "সে ভয়ানক জানোয়ার কিন্তু কেউ নয়, সে গুপি গাইন।",
    "বাঘা যে ডাক শুনে কাঁপে, সে গুপির গলা ভাঁজা।",
    "গুপিও বাঘার বাজনা শুনতে পায়, আর বাঘারই মতো ভয়ে কাঁপে।",
    "শেষে একটু ভাবল, ‘এ বনে থাকলে কখন প্রাণটা যাবে, তার চেয়ে এই বেলা এখান থেকে পালাই।’",
    "এই ভেবে গুপি চুপিচপি বন থেকে বেরিয়ে পড়ল।",
    "বেরিয়েই দেখে আর একটা লোকও বিশাল ঢোল মাথায় করে সেই বনের ভিতর থেকে আসছে।",
    "তাকে দেখেই ভারি আশ্চর্য হয়ে গুপি জিজ্ঞাসা করল, ‘তুমি কে হে?’"
];

document.getElementById('ell-form').addEventListener('submit', function(e){
    e.preventDefault()
    var submitBtn = document.getElementById('submit');
    var resultContainer = document.getElementById('ell-result');
    resultContainer.style.visibility = 'hidden';
    var count = parseInt(document.getElementById('ell-number').value);
    var type = document.getElementById('ell-type').value;

    resultContainer.innerHTML = '';
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    var result = '';

    switch (type) {
        case 'word':
            var words = [];
            for (x=0; x<sourceText.length; x++) {
                newWords = sourceText[x].trim().split(' ');
                words = words.concat(newWords);
            }
            for(i =0; i<count; i++) {
                var rand = Math.floor(Math.random()*words.length);
                result += words[rand] + ' ';
            }
            result = '<p>' + result.trim() + '</p>';
            break;
        
        case 'sentence':
            for(i =0; i<count; i++) {
                var rand = Math.floor(Math.random()*sourceText.length); 
                result += sourceText[rand] + ' ';
            }
            result = '<p>' + result.trim() + '</p>';
            break;

        // default case is paragraph
        default:
            for(i =0; i<count; i++) {
                var para = '';
                var sentenceCount = Math.floor(Math.random()*5) + 3;
                for(j = 0; j<sentenceCount; j++) {
                    var rand = Math.floor(Math.random()*sourceText.length); 
                    para += sourceText[rand] + ' ';
                }
                result += '<p>' + para + '</p>';
            }
            break;
    }

    resultContainer.innerHTML = result;
    submitBtn.disabled = false;
    resultContainer.style.visibility = 'visible';
    submitBtn.classList.remove('loading');
});