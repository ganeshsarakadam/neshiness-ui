"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SelectField } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { 
  Form, 
  FormField, 
  FormActions, 
  FormSection 
} from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useState } from "react";
import { Mail, Lock, User, Phone, MapPin, Calendar, Search, Eye, EyeOff } from "lucide-react";

export default function FormsPage() {
  const [isDark, setIsDark] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    address: "",
    birthDate: "",
    country: "",
    newsletter: false,
    notifications: true,
    theme: "light",
    experience: "intermediate",
    bio: "",
    terms: false,
  });

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted! Check console for data.");
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const countries = [
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "ca", label: "Canada" },
    { value: "au", label: "Australia" },
    { value: "de", label: "Germany" },
    { value: "fr", label: "France" },
  ];

  const experienceLevels = [
    { value: "beginner", label: "Beginner", description: "New to web development" },
    { value: "intermediate", label: "Intermediate", description: "Some experience with React" },
    { value: "advanced", label: "Advanced", description: "Experienced developer" },
    { value: "expert", label: "Expert", description: "Senior/Lead developer" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Form Components</h1>
              <p className="text-muted-foreground mt-2">Comprehensive form system with validation and states</p>
            </div>
            <div className="flex gap-4">
              <Button onClick={toggleTheme} variant="outline">
                {isDark ? "☀️" : "🌙"} Toggle Dark
              </Button>
              <Button asChild variant="outline">
                <a href="/">🏠 Home</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/components">🧩 Components</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/navigation">🧭 Navigation</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Theme Switcher */}
          <section className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Theme Switcher</h2>
            <p className="text-lg text-muted-foreground">
              Switch between different color themes to see how forms adapt
            </p>
            <div className="flex justify-center">
              <ThemeSwitcher />
            </div>
          </section>

          {/* Complete Form Example */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Complete Form Example</h2>
              <p className="text-muted-foreground">A comprehensive form showcasing all components</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>User Registration Form</CardTitle>
                <CardDescription>
                  Fill out the form below to create your account. All fields marked with * are required.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form 
                  onSubmit={handleSubmit}
                  title=""
                  description=""
                  className="space-y-6"
                >
                  {/* Personal Information Section */}
                  <FormSection 
                    title="Personal Information" 
                    description="Tell us about yourself"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField label="Full Name" required>
                        <Input
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          leftIcon={<User className="h-4 w-4" />}
                        />
                      </FormField>

                      <FormField label="Email Address" required>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          leftIcon={<Mail className="h-4 w-4" />}
                        />
                      </FormField>

                      <FormField label="Phone Number">
                        <Input
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          leftIcon={<Phone className="h-4 w-4" />}
                        />
                      </FormField>

                      <FormField label="Birth Date">
                        <Input
                          type="date"
                          value={formData.birthDate}
                          onChange={(e) => handleInputChange("birthDate", e.target.value)}
                          leftIcon={<Calendar className="h-4 w-4" />}
                        />
                      </FormField>
                    </div>

                    <FormField label="Address">
                      <Textarea
                        placeholder="Enter your address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        autoResize
                        maxLength={200}
                        showCharCount
                      />
                    </FormField>

                    <FormField label="Country" required>
                      <SelectField
                        placeholder="Select your country"
                        value={formData.country}
                        onValueChange={(value) => handleInputChange("country", value)}
                        options={countries}
                      />
                    </FormField>
                  </FormSection>

                  {/* Account Settings Section */}
                  <FormSection 
                    title="Account Settings" 
                    description="Configure your account preferences"
                  >
                    <FormField label="Password" required>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        leftIcon={<Lock className="h-4 w-4" />}
                        rightIcon={
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-muted-foreground hover:text-foreground"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        }
                      />
                    </FormField>

                    <FormField label="Experience Level" required>
                      <RadioGroup
                        value={formData.experience}
                        onValueChange={(value) => handleInputChange("experience", value)}
                        options={experienceLevels}
                      />
                    </FormField>

                    <FormField label="Bio">
                      <Textarea
                        placeholder="Tell us about yourself..."
                        value={formData.bio}
                        onChange={(e) => handleInputChange("bio", e.target.value)}
                        autoResize
                        maxLength={500}
                        showCharCount
                        helperText="Brief description of your background and interests"
                      />
                    </FormField>
                  </FormSection>

                  {/* Preferences Section */}
                  <FormSection 
                    title="Preferences" 
                    description="Customize your experience"
                  >
                    <div className="space-y-4">
                      <Switch
                        label="Email Newsletter"
                        description="Receive weekly updates and tips"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked)}
                      />

                      <Switch
                        label="Push Notifications"
                        description="Get notified about important updates"
                        checked={formData.notifications}
                        onCheckedChange={(checked) => handleInputChange("notifications", checked)}
                        variant="success"
                      />

                      <Checkbox
                        label="I agree to the Terms of Service and Privacy Policy"
                        checked={formData.terms}
                        onCheckedChange={(checked) => handleInputChange("terms", checked)}
                        required
                        helperText="You must agree to our terms to continue"
                      />
                    </div>
                  </FormSection>

                  {/* Form Actions */}
                  <FormActions>
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                    <Button type="submit">
                      Create Account
                    </Button>
                  </FormActions>
                </Form>
              </CardContent>
            </Card>
          </section>

          {/* Individual Component Examples */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Component Examples</h2>
              <p className="text-muted-foreground">Individual form components with different states</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Input Examples */}
              <Card>
                <CardHeader>
                  <CardTitle>Input Components</CardTitle>
                  <CardDescription>Various input field states and variants</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Input 
                    label="Default Input" 
                    placeholder="Enter text here"
                    helperText="This is helper text"
                  />
                  
                  <Input 
                    label="Input with Icon" 
                    placeholder="Search..."
                    leftIcon={<Search className="h-4 w-4" />}
                  />
                  
                  <Input 
                    label="Required Input" 
                    placeholder="This field is required"
                    required
                    error
                    errorMessage="This field is required"
                  />
                  
                  <Input 
                    label="Success Input" 
                    placeholder="This input is valid"
                    success
                    successMessage="Great! This looks good"
                  />
                  
                  <Input 
                    label="Disabled Input" 
                    placeholder="This input is disabled"
                    disabled
                    value="Cannot edit this"
                  />
                  
                  <Input 
                    label="Loading Input" 
                    placeholder="This input is loading"
                    loading
                    value="Processing..."
                  />
                </CardContent>
              </Card>

              {/* Select Examples */}
              <Card>
                <CardHeader>
                  <CardTitle>Select Components</CardTitle>
                  <CardDescription>Dropdown selection with various states</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <SelectField 
                    label="Default Select" 
                    placeholder="Choose an option"
                    options={countries.slice(0, 4)}
                    helperText="Select your preferred option"
                  />
                  
                  <SelectField 
                    label="Required Select" 
                    placeholder="This field is required"
                    required
                    error
                    errorMessage="Please select an option"
                    options={countries.slice(0, 3)}
                  />
                  
                  <SelectField 
                    label="Success Select" 
                    placeholder="This selection is valid"
                    success
                    successMessage="Perfect choice!"
                    options={countries.slice(0, 3)}
                    value="us"
                  />
                  
                  <SelectField 
                    label="Disabled Select" 
                    placeholder="This select is disabled"
                    disabled
                    options={countries.slice(0, 3)}
                    value="uk"
                  />
                </CardContent>
              </Card>

              {/* Textarea Examples */}
              <Card>
                <CardHeader>
                  <CardTitle>Textarea Components</CardTitle>
                  <CardDescription>Multi-line text input with auto-resize</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Textarea 
                    label="Default Textarea" 
                    placeholder="Enter your message here"
                    helperText="This textarea auto-resizes"
                  />
                  
                  <Textarea 
                    label="Textarea with Character Count" 
                    placeholder="Type something..."
                    maxLength={100}
                    showCharCount
                    helperText="Maximum 100 characters"
                  />
                  
                  <Textarea 
                    label="Error Textarea" 
                    placeholder="This textarea has an error"
                    error
                    errorMessage="This field cannot be empty"
                  />
                  
                  <Textarea 
                    label="Disabled Textarea" 
                    placeholder="This textarea is disabled"
                    disabled
                    value="Cannot edit this content"
                  />
                </CardContent>
              </Card>

              {/* Checkbox & Radio Examples */}
              <Card>
                <CardHeader>
                  <CardTitle>Checkbox & Radio</CardTitle>
                  <CardDescription>Selection components with labels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Checkboxes</h4>
                    <Checkbox label="Default checkbox" />
                    <Checkbox label="Required checkbox" required />
                    <Checkbox 
                      label="Error checkbox" 
                      error 
                      errorMessage="This checkbox is required"
                    />
                    <Checkbox label="Success checkbox" variant="success" />
                    <Checkbox label="Disabled checkbox" disabled />
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Radio Groups</h4>
                    <RadioGroup 
                      label="Choose your preference"
                      options={[
                        { value: "a", label: "Option A" },
                        { value: "b", label: "Option B" },
                        { value: "c", label: "Option C" }
                      ]}
                    />
                    
                    <RadioGroup 
                      label="Choose your level"
                      error
                      errorMessage="Please select a level"
                      options={experienceLevels.slice(0, 3)}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Switch Examples */}
              <Card>
                <CardHeader>
                  <CardTitle>Switch Components</CardTitle>
                  <CardDescription>Toggle switches with descriptions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Switch 
                    label="Default Switch" 
                    description="Toggle this setting"
                  />
                  
                  <Switch 
                    label="Success Switch" 
                    description="This switch is enabled"
                    variant="success"
                  />
                  
                  <Switch 
                    label="Error Switch" 
                    description="This switch has an error"
                    error
                    errorMessage="This setting is required"
                  />
                  
                  <Switch 
                    label="Disabled Switch" 
                    description="This switch is disabled"
                    disabled
                  />
                  
                  <Switch 
                    label="Large Switch" 
                    description="This is a large switch"
                    size="lg"
                  />
                </CardContent>
              </Card>

              {/* Form States Examples */}
              <Card>
                <CardHeader>
                  <CardTitle>Form States</CardTitle>
                  <CardDescription>Different form validation states</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Form variant="card" size="sm">
                    <FormField label="Valid Field" success successMessage="This field is valid">
                      <Input value="Valid input" success />
                    </FormField>
                    
                    <FormField label="Error Field" error errorMessage="This field has an error">
                      <Input value="Invalid input" error />
                    </FormField>
                    
                    <FormField label="Helper Field" helperText="This field has helper text">
                      <Input placeholder="Type something" />
                    </FormField>
                  </Form>
                  
                  <div className="p-4 border border-success/20 bg-success/10 rounded-lg">
                    <p className="text-sm text-success font-medium">✓ Form submitted successfully!</p>
                  </div>
                  
                  <div className="p-4 border border-destructive/20 bg-destructive/10 rounded-lg">
                    <p className="text-sm text-destructive font-medium">⚠ Please fix the errors above</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
