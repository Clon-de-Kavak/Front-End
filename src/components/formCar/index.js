import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import countries from "./countries";
import years from "./years";
import marcas from "./marcas";
import paises from "./paises";
import "bootstrap/dist/css/bootstrap.min.css";

function getSteps() {
  return ["Informacion del carro", "Informacion personal", "Terminos y condiciones"];
}
function getStepContent(step) {
  switch (step) {
    case 0:
      return (
<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridYear">
      <Form.Label>Año</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
         {years.map((year) => (
                <option key={year}>{year}</option>
              ))}
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridMarca">
      <Form.Label>Marca</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
         {marcas.map((marca) => (
                <option key={marca}>{marca}</option>
              ))}
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridModel">
      <Form.Label>Modelo de carro</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridKm">
      <Form.Label>Kilometraje</Form.Label>
      <Form.Control placeholder="100,000" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridColor">
      <Form.Label>Color</Form.Label>
      <Form.Control placeholder="Blanco" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridTransmision">
      <Form.Label>Tipo de transmision</Form.Label>
     <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>Manual</option>
        <option>Automatica</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>


</Form>
        );
    case 1:
      return (

              <Form>

     <Form.Row>

        <Form.Group as={Col} controlId="formGridApellidos">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control />
        </Form.Group>


        <Form.Group as={Col} controlId="formGridNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEdad">
          <Form.Label>Edad</Form.Label>
          <Form.Control />
        </Form.Group>

     </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridPais">
          <Form.Label>Pais de recidencia</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
             {paises.map((pais) => (
                    <option key={pais}>{pais}</option>
                  ))}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCiudad">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control />
        </Form.Group>

      </Form.Row>

    

     <Form.Row>
     </Form.Row>
      <Form.Group controlId="formGridAddress1">
        <Form.Label>Direccion</Form.Label>
        <Form.Control placeholder="1234 Av SM 01" />
      </Form.Group>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Direccion 2</Form.Label>
        <Form.Control placeholder="Apartamento,piso, estudio" />
      </Form.Group>
    </Form>
        );
    case 2:
      return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Correo electronico</Form.Label>
          <Form.Control type="email" placeholder="ejemplo@ejemplo.com" />
          <Form.Text className="text-muted">
            Tu cuenta es totalmente segura.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicContrasenia">
          <Form.Label>Contrasenia</Form.Label>
          <Form.Control type="password" placeholder="Contrasenia" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Aceptar terminos y condiciones" />
        </Form.Group>
        
      </Form>

      );
    default:
      return "unknown step";
  }
}
export default function App() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const isStepOptional = step => {
    return false;
  };
  const isStepSkipped = step => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
  setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }
  setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div style={{ margin: '100px'}} >
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = "optional";
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', margin: '100px'}} >
        {activeStep === steps.length ? (
          <div>
            All steps completed
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div style={{display: 'flex',  justifyContent:'center', marginTop: '50px'}} >
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  Skip
                </Button>
              )}
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}