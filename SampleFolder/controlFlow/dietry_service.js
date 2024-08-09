
let employeeType ="other";
let dietryStatus;
let otherBenifits;

switch (employeeType){
    case "employee":
        dietryStatus = "Can Avail Dietery Service";
        dieticianStatus = "Might have dietician service"
        break;
    case "enrolledMember":
        dietryStatus = "They are authorized to have access to Dietary Servicesr";
        dieticianStatus = "One-on-one interaction with a dietician"
        break;
    case "subscriber":
        dietryStatus = "they are authorized to have partial access to facilitate Dietary Services only";
        dieticianStatus = "No Dietician interaction"
        break;
    default:
        dietryStatus = "they need to enroll or at least subscribe first to avail this facility";
        dieticianStatus = "No Dietician interaction"
}
console.log("Dietry Staus:", dietryStatus + " & " + "dietician Status" , dieticianStatus);
