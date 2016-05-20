/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	"name" : "Jeff Thomas",
	"role" : "Super Front End Designer",
	"contacts" : {
		"mobile" : "916-718-4082",
		"email" : "jeffeurk@hotmail.com",
		"github" : "jeff5555",
		"location" : "Sacramento, Ca",
	},
	"welcome_message" : "Must be a great day to be here with you.",
	"skills" : "<ul /ul>Out of box thinking, <ul /ul> Analytic Thinking,"
				+ " <ul /ul> Results driven,<ul /ul> PMP,<ul /ul> Six Sigma Green Belt",
	"bioPic" : "images/GNDKIDS.PNG" 
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

var formattedMob = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMob);

var formattedEml = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEml);

var formattedgit = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedgit);

var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLoc);

var formattedbioPic = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(formattedbioPic);

var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcome_message);
$("#header").append(formattedMsg);

$("#header").append(HTMLskillsStart);
var formattedSkills = HTMLskills.replace("%data%",bio.skills);
$("#header").append(formattedSkills);

var work = {
	"jobs" : [
	{
		"employer" : "AT&T Services Inc. Technical Operations/Network Operations",
		"title" : " SR Tech Project Manager",
		"dates" : "12/2013 to Present",
		"location" : "West Sacramento, Ca",
		"description" : "Program Manager for the Decommissioning programs being evaluated for movement into the Project Management Organization. Work on the scope, work flows and evaluation of acceptance into the PMO. IRPM for 22 State Layer 0/1 Infrastructure builds. A3 team member for process improvement.",		
	},
	{
		"employer" : "AT&T Services Inc. Supply Chain/Fleet Operations",
		"title" : "Lead Logistics Analyst",
		"dates" : "4/2011 to 12/2013",
		"location" : "West Sacramento, Ca",
		"description" : "Lead development of 32 HUB locations within Central Offices in the West region. Manage the implementation, stocking and training of the 32 locations; Staffing level of 64 SSAs. Coordinated recovery of excess circuit packs; 116,936 circuit packs recovered valued at $41.3M. Operational support for the continued improvement of the HUB metrics. Migration of the 32 SSH inventory into the Enterprise HUB inventory involving 1470 circuit packs, saving $12.1M. Defined and documented MOW process flow, LDOS process flow and improved processing time of Purchase orders for movement.",		
	},
	{
		"employer" : "AT&T Services Inc. Networks Ops",
		"title" : "Manager Network Process and Quality/Manager Contruction and Engineering/Manager OSP Planning/Manager OSP Engineering",
		"dates" : "1/2005 to 4/2011",
		"location" : "Sacramento, Ca",
		"description" : "Certified MSOC Coach; Certified Six Sigma Green Belt; Successfully Qualified on the Engineering Selection Module; Member of Project Management Institute; ID number 1908940;Analyze quality, service and process effectiveness data and trends to determine process improvements; Develop action items and plans with Directors, Area Managers and Managers to remove roadblocks and improve performance; Training of Management team in the installation of MSOC, including associated tools; Train new Manager in MSOC methodology; Assess process improvements for risk, cost and impact to other organizations; Strong verbal, presentation, communication and analytical skills; Strong project management skills; Strong experience with Microsoft Office applications(Excel, Word, Powerpoint); Working with all levels of Management; Strong negotiation skills; Bachelor’s degree in Business Management; Ability to work n a changing environment with leadership skills supporting a diverse workforce; Proven coaching and motivational skills; Collaborative union/management techniques. Certified Six Sigma Green Belt; Successfully Qualified on the Engineering Selection Module; Facilitate the completion of on-time delivery of multiple projects over a large geographic area; Worked with customers to secure project access.Worked with Government agencies to secure information to allocate resources for future growth; Developed plans to secure the proper resources for future growth; Monitored and documented ongoing resource issues for facilities in assigned geographic area. Mentor to peers; Developed a process to serve water controlers within the FTTP serving area. Worked in the areas of Tract development, Business development and Customers service order resolution.",		
	},
	{
		"employer" : "SBC Communications, Networks Ops",
		"title" : "Manager Network Operations",
		"dates" : "4/1999 to 1/2005",
		"location" : "Eureka,Ca",
		"description" : "Managing the Central Office day to day operations in the area for provisioning and maintenance of transport and switching equipment which include 5ESS, DMS100, DMS200 OC, Titan, DS1, DS3, DS0 power and frames, including callouts, scheduling off-hour cuts, working with both internal and external customers to satisfy their needs. Employee attendance, mandatory coverage, coaching and work performance. CWA represented Communication and Facility Technicians, work with I&M, C&E, PCO and MCOs to bring resolution to customer concerns; developed D5 to D4 conversion process; investigated, reported and finalized CSQFR reports for the entire Sierra LFO-IN organization; Project Manager of Dial for Dial project at FLSMCA14 with only 7 customer reports; brought in as Project Manager of the NSCRCA12Dial for Dial, worked to a successful on time cutover with only 3 trouble reports from 3 months behind schedule; investigation and analysis of missed commits and long duration tickets, proficient in Word, Excel and Outlook. Project Manager for Fire Inspections and Operational Reviews." ,	
	}
]
}

function displayWork(){
	for (job in work.jobs) {
$("#workExperience").append(HTMLworkStart);

// concantinate the Employer and Title fields from work/jobs.
var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
var formattedEmployerTitle = formattedEmployer + formattedTitle;
$(".work-entry:last").append(formattedEmployerTitle);

var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
$(".work-entry:last").append(formattedDates);

var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
$(".work-entry:last").append(formattedDescription);
}
}
displayWork();

function locationizer(work) {
  var locationArray = [];

  for (job in work.jobs) {
    var newLocation = work.jobs[job].location;
    locationArray.push(newLocation);
  }
  return locationArray;
}



var projects = {
	"projects" : 
	{
		"title" : "Stage 1 notes",
		"dates" : "2016",
		"description" : "My first web page for notes",
		"images" : "file:///C:/Users/Jeff/Documents/Udacity/Jeffs%20Stage%201/Jeffsstyle1/JeffsStage1.html",	
	}	
}

projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);

			}
		}
	}
}


var education = {
	
	"schools" : [
	{
		"name" : "The Union Institute",
		"location" : "Sacramento, Ca",
		"degree" : "BA",
		"major" : "Business Administration",
		"date" : "1996",
		"url" : "https://campusweb.myunion.edu/ics",		
	},
	{
		"name" : "Sacramento City College",
		"location" : "Sacramento, Ca",
		"degree" : "AA",
		"major" : "Business Administration",
		"date" : "1976",
		"url" :	"http://www.scc.losrios.edu/",		
	},
	{
		"name" : "Sacramento City College",
		"location" : "Sacramento, Ca",
		"degree" : "AA",
		"major" : "Computer Programming",
		"date" : "1975",
		"url" :	"http://www.scc.losrios.edu/",		
	},
	{
		"name" : "Heald Insitute of Technology",
		"location" : "Sacramento, Ca",
		"degree" : "Electronic Techician",
		"major" : "Electronics",
		"date" : "1997",
		"url" : "http://ciac.csusb.edu/HealdCatalogs/1994%20Heald%20Institute%20of%20Technology.pdf",	
	}
	]
	
}

function educationbank(){
	for (var school in education.schools) {
$("#education").append(HTMLschoolStart);		
var formattedSchName = HTMLschoolName.replace("%data%",education.schools[school].name);
$(".education-entry:last").append(formattedSchName);
var formattedSchDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
$(".education-entry:last").append(formattedSchDegree);
var formattedSchMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
$(".education-entry:last").append(formattedSchMajor);
var formattedSchdate = HTMLschoolDates.replace("%data%",education.schools[school].date);
$(".education-entry:last").append(formattedSchdate);
}
}
educationbank();

var onlineclasses = {
	"onlineCourses" : [
	{
	 
		"title" : "Introduction to Programming",
		"school" : "Udacity",
		"date" : "In Progress",
		"url" : "https://classroom.udacity.com/",
	},
	{
		"title" : "Maintaining Cyber Security",
		"school" : "DeVry University",
		"date" : "12/2015",
		"url" : "http://get-started.devry.edu/sem/online-options.html",
	}
]
}
function onlinebank(){
	for (var course in onlineclasses.onlineCourses) {
$("#onlineclasses").append(HTMLonlineStart);		
var formattedonlineSchool = HTMLonlineSchool.replace("%data%",onlineclasses.onlineCourses[course].school);
$(".online-entry:last").append(formattedonlineSchool);
var formattedonlineTitle = HTMLonlineTitle.replace("%data%",onlineclasses.onlineCourses[course].title);
$(".online-entry:last").append(formattedonlineTitle);
var formattedonlineDate = HTMLonlineDates.replace("%data%",onlineclasses.onlineCourses[course].date);
$(".online-entry:last").append(formattedonlineDate);
var formattedonlineUrl = HTMLonlineURL.replace("%data%",onlineclasses.onlineCourses[course].url);
$(".online-entry:last").append(formattedonlineUrl);
}
}
onlinebank();



$("#mapDiv").append(googleMap);