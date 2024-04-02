var count = 2
function addname() {
    $('#companyNameContainer').append(`
    <div class="flex items-center gap-2">
    <p>${count}.</p>
    <select name="company-name-${count}"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
        <option value="">--Please choose an option--</option>
        <option value="abcd">abcd</option>
    </select>
</div>
    `);
    count += 1
};