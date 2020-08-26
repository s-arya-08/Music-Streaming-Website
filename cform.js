<script>



var input = document.getElementById('password');

input.oninvalid = function(event) {
    event.target.setCustomValidity('Use xxx-xxx-xxxx');
}


var input = document.getElementById('email');

input.oninvalid = function(event) {
    event.target.setCustomValidity('characters followed by an @ sign, followed by more characters, and then a "."');
}
