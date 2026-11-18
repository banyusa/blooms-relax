const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#site-nav');if(toggle&&nav)toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();const form=document.querySelector('#contact-form');if(form)form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const subject='Landscape project inquiry from '+data.get('name');const body='Name: '+data.get('name')+'\nEmail: '+data.get('email')+'\nPhone: '+(data.get('phone')||'Not provided')+'\n\nProject details:\n'+data.get('message');window.location.href='mailto:sales@bloomsrelax.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);});


/* Load homepage wording from Pages CMS */
if (document.getElementById('homepage-heading')) {
  fetch('/homepage.json')
    .then(response => {
      if (!response.ok) throw new Error('Homepage content unavailable');
      return response.json();
    })
    .then(data => {
      const fields = {
        heading: 'homepage-heading',
        tagline: 'homepage-tagline',
        description: 'homepage-description'
      };

      Object.entries(fields).forEach(([field, id]) => {
        const element = document.getElementById(id);
        if (element && typeof data[field] === 'string') {
          element.textContent = data[field];
        }
      });
    })
    .catch(error => console.warn('Using original homepage text:', error));
}
