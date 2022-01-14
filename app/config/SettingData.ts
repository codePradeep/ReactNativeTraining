import { icon, Screen } from ".";

const SettingData = [
    {
        id: "1",
        title: "Profile",
        icondata: icon.profile,
        navigationdata:"MyAccountModel"
    },
    {
        id: "2",
        title: "Change Password",
        icondata: icon.lock,
        navigationdata:'ChangePasswordModel'
      
    },
    {
        id: "3",
        title: "Preferences",
        icondata: icon.filter,
        navigationdata:"NoticationSettingModel"
      
    },
    {
        id: "4",
        title: "Notification",
        icondata: icon.notification,
        navigationdata:"NoticationSettingModel"
      
    },
    {
        id: "5",
        title: "Data Use",
        icondata: icon.stock,
        navigationdata:Screen.NoticationSettingModel
      
    },
    {
        id: "6",
        title: "Language",
        icondata: icon.worldicon,
        navigationdata:Screen.NoticationSettingModel
      
    },
    {
        id: "7",
        title: "check Update",
        icondata: icon.update,
        navigationdata:Screen.NoticationSettingModel
      
    },
    {
        id: "8",
        title: "Contect Us",
        icondata: icon.call,
        navigationdata:Screen.NoticationSettingModel
      
    },
    {
        id: "9",
        title: "Privacy Policy",
        icondata: icon.shield,
        navigationdata:Screen.NoticationSettingModel
      
    },
    {
        id: "10",
        title: "Terms & Conditions",
        icondata: icon.list,
        navigationdata:Screen.NoticationSettingModel
      
    },
    {
        id: "11",
        title: "LogOut",
        icondata: icon.door,
        navigationdata:"OnboradingModel"
      
    },
]


export default SettingData