namespace MonitoringAssistant.Models
{
    public class EnvironmentInfo
    {
        public string DataCenter { get; set; }
        public string Environment { get; set; }
        public string Project { get; set; }
        public string[] Machines { get; set; }
    }
}