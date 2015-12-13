$(function() {
	/* slide panel toggle */
	$('.project-name').on('click', function(event){
		event.preventDefault();
		if ($(this).hasClass('add-card')) {
			return;
		}
		$('.cd-panel').toggleClass('is-visible');
	});
	$('.cd-panel').on('click', function(event){
		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel').removeClass('is-visible');
			event.preventDefault();
		}
	});

	$('add-card').click(function() {
		$('#main-section').append();
	});
	
	// pretend this is the object you GET or POST from the API call
	var mystuff = {
		user_info: {
			id: "123",
			first_name: "Rica",
			last_name: "Zhang",
			net_id: "rz30"
		},
		projects: [
			{
				id: "12345",
				user_id: "123",
				project_name: "Sample Project 1",
				api_key: "12345abcde",
				created_on: "January 12",
				vms: [
					{
						vm_name: "VM 1",
						vm_alias: "http://static.colab.duke.edu/InnovationColabSampleApplications",
						vm_location: "colab-sbx-218.oit.duke.edu"
					},
					{
						vm_name: "VM 2",
						vm_alias: "http://static.colab.duke.edu/InnovationColabSampleApplications",
						vm_location: "colab-sbx-218.oit.duke.edu"
					}
				],
				repos: [
					{
						repo_name: "Repo 1",
						repo_location: "https://github.com/ricazhang/InnovationColabSampleApplications"
					},
					{
						repo_name: "Repo 2",
						repo_location: "https://github.com/ricazhang/InnovationColabSampleApplications"
					}
				]
			},
			{
				id: "12346",
				user_id: "123",
				project_name: "Sample Project 2",
				api_key: "12345abcde",
				created_on: "January 14",
				vms: [
					{
						vm_name: "VM 3",
						vm_alias: "http://static.colab.duke.edu/InnovationColabSampleApplications",
						vm_location: "colab-sbx-218.oit.duke.edu"
					},
				],
				repos: [
					{
						repo_name: "Repo 3",
						repo_location: "https://github.com/ricazhang/InnovationColabSampleApplications"
					},
					{
						repo_name: "Repo 4",
						repo_location: "https://github.com/ricazhang/InnovationColabSampleApplications"
					}
				]
			},
			{
				id: "12347",
				user_id: "123",
				project_name: "Sample Project 3",
				api_key: "12345abcde",
				created_on: "February 12",
				vms: [
					{
						vm_name: "VM 4",
						vm_alias: "http://static.colab.duke.edu/InnovationColabSampleApplications",
						vm_location: "colab-sbx-218.oit.duke.edu"
					},
					{
						vm_name: "VM 5",
						vm_alias: "http://static.colab.duke.edu/InnovationColabSampleApplications",
						vm_location: "colab-sbx-218.oit.duke.edu"
					}
				],
				repos: [
					{
						repo_name: "Repo 5",
						repo_location: "https://github.com/ricazhang/InnovationColabSampleApplications"
					},
					{
						repo_name: "Repo 6",
						repo_location: "https://github.com/ricazhang/InnovationColabSampleApplications"
					}
				]
			}
		]
	]};
});