
const navLinks = document.querySelectorAll('#right_elements li a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('active')); //remove active from all classes
    this.classList.add('active'); //add active for class that clicked
  });
});





const filterButtons = document.querySelectorAll('.portfolio-filters li');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // تظبيط الزرار
        filterButtons.forEach(btn => btn.classList.remove('filter-active'));
        this.classList.add('filter-active');

        const filterValue = this.getAttribute('data-filter').replace('.', '');

        portfolioItems.forEach(item => {
            
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.classList.remove('is-hidden');
            } 
            //  غير كدة.. ضيف كلاس الإخفاء اللي فيه الأنيميشن
            else {
                item.classList.add('is-hidden');
            }
        });
    });
});