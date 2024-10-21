function toggleAccordion(item) {
    const content = document.getElementById(`content-${item}`);
    const icon = document.getElementById(`icon-${item}`);
  
    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      icon.classList.add('rotate-180');
    } else {
      content.classList.add('hidden');
      icon.classList.remove('rotate-180');
    }
  }
  