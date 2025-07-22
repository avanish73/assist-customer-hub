import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, CheckCircle, AlertCircle, User } from "lucide-react";

const mockTickets = [
  {
    id: "TK001234",
    subject: "Login issues with mobile app",
    status: "In Progress",
    priority: "High",
    created: "2024-01-15",
    updated: "2024-01-16",
    assignee: "John Smith"
  },
  {
    id: "TK001235",
    subject: "Billing question about subscription",
    status: "Resolved",
    priority: "Medium",
    created: "2024-01-14",
    updated: "2024-01-15",
    assignee: "Sarah Johnson"
  },
  {
    id: "TK001236",
    subject: "Feature request for dark mode",
    status: "Open",
    priority: "Low",
    created: "2024-01-13",
    updated: "2024-01-13",
    assignee: "Mike Wilson"
  }
];

const TicketTracker = () => {
  const [ticketId, setTicketId] = useState("");
  const [searchResults, setSearchResults] = useState<typeof mockTickets>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (ticketId.trim()) {
      const results = mockTickets.filter(ticket => 
        ticket.id.toLowerCase().includes(ticketId.toLowerCase())
      );
      setSearchResults(results);
      setShowResults(true);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Open":
        return <Clock className="h-4 w-4" />;
      case "In Progress":
        return <AlertCircle className="h-4 w-4" />;
      case "Resolved":
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Open":
        return "secondary";
      case "In Progress":
        return "default";
      case "Resolved":
        return "default";
      default:
        return "secondary";
    }
  };

  const getPriorityVariant = (priority: string) => {
    switch (priority) {
      case "High":
        return "destructive";
      case "Medium":
        return "default";
      case "Low":
        return "secondary";
      default:
        return "secondary";
    }
  };

  return (
    <section id="ticket-tracker" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Track Your Tickets
            </h2>
            <p className="text-xl text-muted-foreground">
              Enter your ticket ID to check status and updates
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Search Tickets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Enter ticket ID (e.g., TK001234)"
                    value={ticketId}
                    onChange={(e) => setTicketId(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <Button onClick={handleSearch}>
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          {showResults && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Search Results</h3>
              {searchResults.length > 0 ? (
                searchResults.map((ticket) => (
                  <Card key={ticket.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">
                            {ticket.subject}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Ticket ID: {ticket.id}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant={getStatusVariant(ticket.status)} className="flex items-center gap-1">
                            {getStatusIcon(ticket.status)}
                            {ticket.status}
                          </Badge>
                          <Badge variant={getPriorityVariant(ticket.priority)}>
                            {ticket.priority}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-muted-foreground">Created:</span>
                          <p>{ticket.created}</p>
                        </div>
                        <div>
                          <span className="font-medium text-muted-foreground">Last Updated:</span>
                          <p>{ticket.updated}</p>
                        </div>
                        <div>
                          <span className="font-medium text-muted-foreground">Assigned to:</span>
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <p>{ticket.assignee}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-muted-foreground">
                      No tickets found with ID "{ticketId}". Please check your ticket ID and try again.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {!showResults && (
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockTickets.slice(0, 2).map((ticket) => (
                    <div key={ticket.id} className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{ticket.subject}</h4>
                        <p className="text-sm text-muted-foreground">ID: {ticket.id}</p>
                      </div>
                      <Badge variant={getStatusVariant(ticket.status)} className="flex items-center gap-1">
                        {getStatusIcon(ticket.status)}
                        {ticket.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default TicketTracker;