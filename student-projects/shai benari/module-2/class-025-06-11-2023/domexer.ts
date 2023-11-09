const paragraph = document.querySelector('.text') as HTMLAnchorElement;
paragraph.innerHTML = paragraph.innerText.split(' ')
.map((word) => word.length > 8 ? `<span style="background-color: yellow;">${word}</span>` : word).join(' ');

const link = document.createElement('a');
link.href = "https://www.google.com/";
link.innerText = "googel site";
document.body.appendChild(link);

paragraph.innerHTML = paragraph.innerHTML.split('.').join('.<p></p>')


const countWord = paragraph.innerText.split(' ').length;
console.log(countWord);
const countWordElemnt = document.createElement('div');
console.log(countWordElemnt);
countWordElemnt.innerText = `${countWord} words in the paragrph `
document.body.insertBefore(countWordElemnt,paragraph);

