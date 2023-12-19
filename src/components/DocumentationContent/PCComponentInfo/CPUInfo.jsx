import {Card, Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useRef} from "react";

export function CPUInfo() {
    const info = useRef(null);
    const specs = useRef(null);

    const scrollToInfo = () => {
        info.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToSpecs = () => {
        specs.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <span>
            <Card.Header>
                <h5 className='text-center'>CPU Information</h5>

                <span className='position-absolute top-0 end-0 py-2 pe-3'>
                    <Link onClick={scrollToInfo}>Info</Link> | <Link onClick={scrollToSpecs}>Specifications</Link>
                </span>
            </Card.Header>
            <Card.Body className='p-4' style={{height: '965px', overflowY: 'scroll'}}>
                <Card.Title ref={info}>What is a CPU?</Card.Title>
                <Card.Text className='p-2'>
                    In the world of personal computers, the term "CPU" frequently arises.
                    But what exactly is a CPU, and why is it so crucial to the functionality of your PC?
                </Card.Text>
                <div className='text-center'>
                    <Image className="col-5" src={require("../../../images/Documentation/cpu-img-01.png")}
                           alt="No image found."/>
                </div>
                <Card.Text className='p-2'>
                    The CPU, or Central Processing Unit, is the brain of your
                    personal computer. It is a microchip that serves as the primary
                    component responsible for executing instructions and performing calculations
                    that make your computer run. Think of it as the brain of the computer, coordinating every operation your computer undertakes.
                </Card.Text>
                <Card.Title>Key Functions of a CPU</Card.Title>
                <Card.Text className='p-2'>
                    <ul>
                        <li>
                           <span className='fw-bold'>Processing Instructions: </span>
                            The CPU is designed to process a series of instructions stored in the computer's memory.
                            These instructions are typically represented in binary code and include tasks like arithmetic calculations, data movement,
                            and decision-making processes.
                        </li>
                        <br/>
                        <li>
                             <span className='fw-bold'>Clock Speed: </span>
                            CPUs operate at a specific clock speed, measured in Hertz (Hz) or Gigahertz (GHz).
                            This clock speed determines how many instructions the CPU can execute per second. Higher clock speeds generally mean faster performance.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cores: </span>
                            Modern CPUs often come with multiple cores, which are essentially individual processing units within a single chip.
                            Each core can handle its own set of instructions, allowing for parallel processing and improved multitasking capabilities.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cache Memory: </span>
                             CPUs also feature cache memory, which is a small but ultra-fast memory storage.
                            It temporarily stores frequently accessed data and instructions, reducing the time it takes for the CPU to retrieve information,
                            thus enhancing overall performance.
                        </li>
                    </ul>
                </Card.Text>
                <Card.Title ref={specs}>The CPU's Role in Everyday Computing</Card.Title>
                <Card.Text className='p-2'>
                    Whenever you open an application, browse the web, or even perform simple tasks like typing a document, the CPU is at work.
                    It fetches data from your computer's memory, processes it, and sends the results back to the memory or display.
                    This seamless coordination is what enables you to interact with your computer.
                </Card.Text>
                <span>
                                                    <Card.Text className='p-2'>
                    <ul>
                        <li>
                           <span className='fw-bold'>Processing Instructions: </span>
                            The CPU is designed to process a series of instructions stored in the computer's memory.
                            These instructions are typically represented in binary code and include tasks like arithmetic calculations, data movement,
                            and decision-making processes.
                        </li>
                        <br/>
                        <li>
                             <span className='fw-bold'>Clock Speed: </span>
                            CPUs operate at a specific clock speed, measured in Hertz (Hz) or Gigahertz (GHz).
                            This clock speed determines how many instructions the CPU can execute per second. Higher clock speeds generally mean faster performance.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cores: </span>
                            Modern CPUs often come with multiple cores, which are essentially individual processing units within a single chip.
                            Each core can handle its own set of instructions, allowing for parallel processing and improved multitasking capabilities.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cache Memory: </span>
                             CPUs also feature cache memory, which is a small but ultra-fast memory storage.
                            It temporarily stores frequently accessed data and instructions, reducing the time it takes for the CPU to retrieve information,
                            thus enhancing overall performance.
                        </li>
                    </ul>
                </Card.Text>
                <Card.Title>The CPU's Role in Everyday Computing</Card.Title>
                <Card.Text className='p-2'>
                    Whenever you open an application, browse the web, or even perform simple tasks like typing a document, the CPU is at work.
                    It fetches data from your computer's memory, processes it, and sends the results back to the memory or display.
                    This seamless coordination is what enables you to interact with your computer.
                </Card.Text>
                                <Card.Text className='p-2'>
                    <ul>
                        <li>
                           <span className='fw-bold'>Processing Instructions: </span>
                            The CPU is designed to process a series of instructions stored in the computer's memory.
                            These instructions are typically represented in binary code and include tasks like arithmetic calculations, data movement,
                            and decision-making processes.
                        </li>
                        <br/>
                        <li>
                             <span className='fw-bold'>Clock Speed: </span>
                            CPUs operate at a specific clock speed, measured in Hertz (Hz) or Gigahertz (GHz).
                            This clock speed determines how many instructions the CPU can execute per second. Higher clock speeds generally mean faster performance.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cores: </span>
                            Modern CPUs often come with multiple cores, which are essentially individual processing units within a single chip.
                            Each core can handle its own set of instructions, allowing for parallel processing and improved multitasking capabilities.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cache Memory: </span>
                             CPUs also feature cache memory, which is a small but ultra-fast memory storage.
                            It temporarily stores frequently accessed data and instructions, reducing the time it takes for the CPU to retrieve information,
                            thus enhancing overall performance.
                        </li>
                    </ul>
                </Card.Text>
                <Card.Title>The CPU's Role in Everyday Computing</Card.Title>
                <Card.Text className='p-2'>
                    Whenever you open an application, browse the web, or even perform simple tasks like typing a document, the CPU is at work.
                    It fetches data from your computer's memory, processes it, and sends the results back to the memory or display.
                    This seamless coordination is what enables you to interact with your computer.
                </Card.Text>
                                <Card.Text className='p-2'>
                    <ul>
                        <li>
                           <span className='fw-bold'>Processing Instructions: </span>
                            The CPU is designed to process a series of instructions stored in the computer's memory.
                            These instructions are typically represented in binary code and include tasks like arithmetic calculations, data movement,
                            and decision-making processes.
                        </li>
                        <br/>
                        <li>
                             <span className='fw-bold'>Clock Speed: </span>
                            CPUs operate at a specific clock speed, measured in Hertz (Hz) or Gigahertz (GHz).
                            This clock speed determines how many instructions the CPU can execute per second. Higher clock speeds generally mean faster performance.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cores: </span>
                            Modern CPUs often come with multiple cores, which are essentially individual processing units within a single chip.
                            Each core can handle its own set of instructions, allowing for parallel processing and improved multitasking capabilities.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cache Memory: </span>
                             CPUs also feature cache memory, which is a small but ultra-fast memory storage.
                            It temporarily stores frequently accessed data and instructions, reducing the time it takes for the CPU to retrieve information,
                            thus enhancing overall performance.
                        </li>
                    </ul>
                </Card.Text>
                <Card.Title>The CPU's Role in Everyday Computing</Card.Title>
                <Card.Text className='p-2'>
                    Whenever you open an application, browse the web, or even perform simple tasks like typing a document, the CPU is at work.
                    It fetches data from your computer's memory, processes it, and sends the results back to the memory or display.
                    This seamless coordination is what enables you to interact with your computer.
                </Card.Text>
                                <Card.Text className='p-2'>
                    <ul>
                        <li>
                           <span className='fw-bold'>Processing Instructions: </span>
                            The CPU is designed to process a series of instructions stored in the computer's memory.
                            These instructions are typically represented in binary code and include tasks like arithmetic calculations, data movement,
                            and decision-making processes.
                        </li>
                        <br/>
                        <li>
                             <span className='fw-bold'>Clock Speed: </span>
                            CPUs operate at a specific clock speed, measured in Hertz (Hz) or Gigahertz (GHz).
                            This clock speed determines how many instructions the CPU can execute per second. Higher clock speeds generally mean faster performance.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cores: </span>
                            Modern CPUs often come with multiple cores, which are essentially individual processing units within a single chip.
                            Each core can handle its own set of instructions, allowing for parallel processing and improved multitasking capabilities.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cache Memory: </span>
                             CPUs also feature cache memory, which is a small but ultra-fast memory storage.
                            It temporarily stores frequently accessed data and instructions, reducing the time it takes for the CPU to retrieve information,
                            thus enhancing overall performance.
                        </li>
                    </ul>
                </Card.Text>
                <Card.Title>The CPU's Role in Everyday Computing</Card.Title>
                <Card.Text className='p-2'>
                    Whenever you open an application, browse the web, or even perform simple tasks like typing a document, the CPU is at work.
                    It fetches data from your computer's memory, processes it, and sends the results back to the memory or display.
                    This seamless coordination is what enables you to interact with your computer.
                </Card.Text>
                                <Card.Text className='p-2'>
                    <ul>
                        <li>
                           <span className='fw-bold'>Processing Instructions: </span>
                            The CPU is designed to process a series of instructions stored in the computer's memory.
                            These instructions are typically represented in binary code and include tasks like arithmetic calculations, data movement,
                            and decision-making processes.
                        </li>
                        <br/>
                        <li>
                             <span className='fw-bold'>Clock Speed: </span>
                            CPUs operate at a specific clock speed, measured in Hertz (Hz) or Gigahertz (GHz).
                            This clock speed determines how many instructions the CPU can execute per second. Higher clock speeds generally mean faster performance.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cores: </span>
                            Modern CPUs often come with multiple cores, which are essentially individual processing units within a single chip.
                            Each core can handle its own set of instructions, allowing for parallel processing and improved multitasking capabilities.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cache Memory: </span>
                             CPUs also feature cache memory, which is a small but ultra-fast memory storage.
                            It temporarily stores frequently accessed data and instructions, reducing the time it takes for the CPU to retrieve information,
                            thus enhancing overall performance.
                        </li>
                    </ul>
                </Card.Text>
                <Card.Title>The CPU's Role in Everyday Computing</Card.Title>
                <Card.Text className='p-2'>
                    Whenever you open an application, browse the web, or even perform simple tasks like typing a document, the CPU is at work.
                    It fetches data from your computer's memory, processes it, and sends the results back to the memory or display.
                    This seamless coordination is what enables you to interact with your computer.
                </Card.Text>
                                <Card.Text className='p-2'>
                    <ul>
                        <li>
                           <span className='fw-bold'>Processing Instructions: </span>
                            The CPU is designed to process a series of instructions stored in the computer's memory.
                            These instructions are typically represented in binary code and include tasks like arithmetic calculations, data movement,
                            and decision-making processes.
                        </li>
                        <br/>
                        <li>
                             <span className='fw-bold'>Clock Speed: </span>
                            CPUs operate at a specific clock speed, measured in Hertz (Hz) or Gigahertz (GHz).
                            This clock speed determines how many instructions the CPU can execute per second. Higher clock speeds generally mean faster performance.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cores: </span>
                            Modern CPUs often come with multiple cores, which are essentially individual processing units within a single chip.
                            Each core can handle its own set of instructions, allowing for parallel processing and improved multitasking capabilities.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cache Memory: </span>
                             CPUs also feature cache memory, which is a small but ultra-fast memory storage.
                            It temporarily stores frequently accessed data and instructions, reducing the time it takes for the CPU to retrieve information,
                            thus enhancing overall performance.
                        </li>
                    </ul>
                </Card.Text>
                <Card.Title>The CPU's Role in Everyday Computing</Card.Title>
                <Card.Text className='p-2'>
                    Whenever you open an application, browse the web, or even perform simple tasks like typing a document, the CPU is at work.
                    It fetches data from your computer's memory, processes it, and sends the results back to the memory or display.
                    This seamless coordination is what enables you to interact with your computer.
                </Card.Text>
                                <Card.Text className='p-2'>
                    <ul>
                        <li>
                           <span className='fw-bold'>Processing Instructions: </span>
                            The CPU is designed to process a series of instructions stored in the computer's memory.
                            These instructions are typically represented in binary code and include tasks like arithmetic calculations, data movement,
                            and decision-making processes.
                        </li>
                        <br/>
                        <li>
                             <span className='fw-bold'>Clock Speed: </span>
                            CPUs operate at a specific clock speed, measured in Hertz (Hz) or Gigahertz (GHz).
                            This clock speed determines how many instructions the CPU can execute per second. Higher clock speeds generally mean faster performance.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cores: </span>
                            Modern CPUs often come with multiple cores, which are essentially individual processing units within a single chip.
                            Each core can handle its own set of instructions, allowing for parallel processing and improved multitasking capabilities.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cache Memory: </span>
                             CPUs also feature cache memory, which is a small but ultra-fast memory storage.
                            It temporarily stores frequently accessed data and instructions, reducing the time it takes for the CPU to retrieve information,
                            thus enhancing overall performance.
                        </li>
                    </ul>
                </Card.Text>
                <Card.Title>The CPU's Role in Everyday Computing</Card.Title>
                <Card.Text className='p-2'>
                    Whenever you open an application, browse the web, or even perform simple tasks like typing a document, the CPU is at work.
                    It fetches data from your computer's memory, processes it, and sends the results back to the memory or display.
                    This seamless coordination is what enables you to interact with your computer.
                </Card.Text>
                                <Card.Text className='p-2'>
                    <ul>
                        <li>
                           <span className='fw-bold'>Processing Instructions: </span>
                            The CPU is designed to process a series of instructions stored in the computer's memory.
                            These instructions are typically represented in binary code and include tasks like arithmetic calculations, data movement,
                            and decision-making processes.
                        </li>
                        <br/>
                        <li>
                             <span className='fw-bold'>Clock Speed: </span>
                            CPUs operate at a specific clock speed, measured in Hertz (Hz) or Gigahertz (GHz).
                            This clock speed determines how many instructions the CPU can execute per second. Higher clock speeds generally mean faster performance.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cores: </span>
                            Modern CPUs often come with multiple cores, which are essentially individual processing units within a single chip.
                            Each core can handle its own set of instructions, allowing for parallel processing and improved multitasking capabilities.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cache Memory: </span>
                             CPUs also feature cache memory, which is a small but ultra-fast memory storage.
                            It temporarily stores frequently accessed data and instructions, reducing the time it takes for the CPU to retrieve information,
                            thus enhancing overall performance.
                        </li>
                    </ul>
                </Card.Text>
                <Card.Title>The CPU's Role in Everyday Computing</Card.Title>
                <Card.Text className='p-2'>
                    Whenever you open an application, browse the web, or even perform simple tasks like typing a document, the CPU is at work.
                    It fetches data from your computer's memory, processes it, and sends the results back to the memory or display.
                    This seamless coordination is what enables you to interact with your computer.
                </Card.Text>
                                <Card.Text className='p-2'>
                    <ul>
                        <li>
                           <span className='fw-bold'>Processing Instructions: </span>
                            The CPU is designed to process a series of instructions stored in the computer's memory.
                            These instructions are typically represented in binary code and include tasks like arithmetic calculations, data movement,
                            and decision-making processes.
                        </li>
                        <br/>
                        <li>
                             <span className='fw-bold'>Clock Speed: </span>
                            CPUs operate at a specific clock speed, measured in Hertz (Hz) or Gigahertz (GHz).
                            This clock speed determines how many instructions the CPU can execute per second. Higher clock speeds generally mean faster performance.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cores: </span>
                            Modern CPUs often come with multiple cores, which are essentially individual processing units within a single chip.
                            Each core can handle its own set of instructions, allowing for parallel processing and improved multitasking capabilities.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cache Memory: </span>
                             CPUs also feature cache memory, which is a small but ultra-fast memory storage.
                            It temporarily stores frequently accessed data and instructions, reducing the time it takes for the CPU to retrieve information,
                            thus enhancing overall performance.
                        </li>
                    </ul>
                </Card.Text>
                <Card.Title>The CPU's Role in Everyday Computing</Card.Title>
                <Card.Text className='p-2'>
                    Whenever you open an application, browse the web, or even perform simple tasks like typing a document, the CPU is at work.
                    It fetches data from your computer's memory, processes it, and sends the results back to the memory or display.
                    This seamless coordination is what enables you to interact with your computer.
                </Card.Text>
                                <Card.Text className='p-2'>
                    <ul>
                        <li>
                           <span className='fw-bold'>Processing Instructions: </span>
                            The CPU is designed to process a series of instructions stored in the computer's memory.
                            These instructions are typically represented in binary code and include tasks like arithmetic calculations, data movement,
                            and decision-making processes.
                        </li>
                        <br/>
                        <li>
                             <span className='fw-bold'>Clock Speed: </span>
                            CPUs operate at a specific clock speed, measured in Hertz (Hz) or Gigahertz (GHz).
                            This clock speed determines how many instructions the CPU can execute per second. Higher clock speeds generally mean faster performance.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cores: </span>
                            Modern CPUs often come with multiple cores, which are essentially individual processing units within a single chip.
                            Each core can handle its own set of instructions, allowing for parallel processing and improved multitasking capabilities.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cache Memory: </span>
                             CPUs also feature cache memory, which is a small but ultra-fast memory storage.
                            It temporarily stores frequently accessed data and instructions, reducing the time it takes for the CPU to retrieve information,
                            thus enhancing overall performance.
                        </li>
                    </ul>
                </Card.Text>
                <Card.Title>The CPU's Role in Everyday Computing</Card.Title>
                <Card.Text className='p-2'>
                    Whenever you open an application, browse the web, or even perform simple tasks like typing a document, the CPU is at work.
                    It fetches data from your computer's memory, processes it, and sends the results back to the memory or display.
                    This seamless coordination is what enables you to interact with your computer.
                </Card.Text>
                                <Card.Text className='p-2'>
                    <ul>
                        <li>
                           <span className='fw-bold'>Processing Instructions: </span>
                            The CPU is designed to process a series of instructions stored in the computer's memory.
                            These instructions are typically represented in binary code and include tasks like arithmetic calculations, data movement,
                            and decision-making processes.
                        </li>
                        <br/>
                        <li>
                             <span className='fw-bold'>Clock Speed: </span>
                            CPUs operate at a specific clock speed, measured in Hertz (Hz) or Gigahertz (GHz).
                            This clock speed determines how many instructions the CPU can execute per second. Higher clock speeds generally mean faster performance.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cores: </span>
                            Modern CPUs often come with multiple cores, which are essentially individual processing units within a single chip.
                            Each core can handle its own set of instructions, allowing for parallel processing and improved multitasking capabilities.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cache Memory: </span>
                             CPUs also feature cache memory, which is a small but ultra-fast memory storage.
                            It temporarily stores frequently accessed data and instructions, reducing the time it takes for the CPU to retrieve information,
                            thus enhancing overall performance.
                        </li>
                    </ul>
                </Card.Text>
                <Card.Title>The CPU's Role in Everyday Computing</Card.Title>
                <Card.Text className='p-2'>
                    Whenever you open an application, browse the web, or even perform simple tasks like typing a document, the CPU is at work.
                    It fetches data from your computer's memory, processes it, and sends the results back to the memory or display.
                    This seamless coordination is what enables you to interact with your computer.
                </Card.Text>
                                <Card.Text className='p-2'>
                    <ul>
                        <li>
                           <span className='fw-bold'>Processing Instructions: </span>
                            The CPU is designed to process a series of instructions stored in the computer's memory.
                            These instructions are typically represented in binary code and include tasks like arithmetic calculations, data movement,
                            and decision-making processes.
                        </li>
                        <br/>
                        <li>
                             <span className='fw-bold'>Clock Speed: </span>
                            CPUs operate at a specific clock speed, measured in Hertz (Hz) or Gigahertz (GHz).
                            This clock speed determines how many instructions the CPU can execute per second. Higher clock speeds generally mean faster performance.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cores: </span>
                            Modern CPUs often come with multiple cores, which are essentially individual processing units within a single chip.
                            Each core can handle its own set of instructions, allowing for parallel processing and improved multitasking capabilities.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cache Memory: </span>
                             CPUs also feature cache memory, which is a small but ultra-fast memory storage.
                            It temporarily stores frequently accessed data and instructions, reducing the time it takes for the CPU to retrieve information,
                            thus enhancing overall performance.
                        </li>
                    </ul>
                </Card.Text>
                <Card.Title>The CPU's Role in Everyday Computing</Card.Title>
                <Card.Text className='p-2'>
                    Whenever you open an application, browse the web, or even perform simple tasks like typing a document, the CPU is at work.
                    It fetches data from your computer's memory, processes it, and sends the results back to the memory or display.
                    This seamless coordination is what enables you to interact with your computer.
                </Card.Text>
                                <Card.Text className='p-2'>
                    <ul>
                        <li>
                           <span className='fw-bold'>Processing Instructions: </span>
                            The CPU is designed to process a series of instructions stored in the computer's memory.
                            These instructions are typically represented in binary code and include tasks like arithmetic calculations, data movement,
                            and decision-making processes.
                        </li>
                        <br/>
                        <li>
                             <span className='fw-bold'>Clock Speed: </span>
                            CPUs operate at a specific clock speed, measured in Hertz (Hz) or Gigahertz (GHz).
                            This clock speed determines how many instructions the CPU can execute per second. Higher clock speeds generally mean faster performance.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cores: </span>
                            Modern CPUs often come with multiple cores, which are essentially individual processing units within a single chip.
                            Each core can handle its own set of instructions, allowing for parallel processing and improved multitasking capabilities.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cache Memory: </span>
                             CPUs also feature cache memory, which is a small but ultra-fast memory storage.
                            It temporarily stores frequently accessed data and instructions, reducing the time it takes for the CPU to retrieve information,
                            thus enhancing overall performance.
                        </li>
                    </ul>
                </Card.Text>
                <Card.Title>The CPU's Role in Everyday Computing</Card.Title>
                <Card.Text className='p-2'>
                    Whenever you open an application, browse the web, or even perform simple tasks like typing a document, the CPU is at work.
                    It fetches data from your computer's memory, processes it, and sends the results back to the memory or display.
                    This seamless coordination is what enables you to interact with your computer.
                </Card.Text>
                                <Card.Text className='p-2'>
                    <ul>
                        <li>
                           <span className='fw-bold'>Processing Instructions: </span>
                            The CPU is designed to process a series of instructions stored in the computer's memory.
                            These instructions are typically represented in binary code and include tasks like arithmetic calculations, data movement,
                            and decision-making processes.
                        </li>
                        <br/>
                        <li>
                             <span className='fw-bold'>Clock Speed: </span>
                            CPUs operate at a specific clock speed, measured in Hertz (Hz) or Gigahertz (GHz).
                            This clock speed determines how many instructions the CPU can execute per second. Higher clock speeds generally mean faster performance.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cores: </span>
                            Modern CPUs often come with multiple cores, which are essentially individual processing units within a single chip.
                            Each core can handle its own set of instructions, allowing for parallel processing and improved multitasking capabilities.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cache Memory: </span>
                             CPUs also feature cache memory, which is a small but ultra-fast memory storage.
                            It temporarily stores frequently accessed data and instructions, reducing the time it takes for the CPU to retrieve information,
                            thus enhancing overall performance.
                        </li>
                    </ul>
                </Card.Text>
                <Card.Title>The CPU's Role in Everyday Computing</Card.Title>
                <Card.Text className='p-2'>
                    Whenever you open an application, browse the web, or even perform simple tasks like typing a document, the CPU is at work.
                    It fetches data from your computer's memory, processes it, and sends the results back to the memory or display.
                    This seamless coordination is what enables you to interact with your computer.
                </Card.Text>
                                <Card.Text className='p-2'>
                    <ul>
                        <li>
                           <span className='fw-bold'>Processing Instructions: </span>
                            The CPU is designed to process a series of instructions stored in the computer's memory.
                            These instructions are typically represented in binary code and include tasks like arithmetic calculations, data movement,
                            and decision-making processes.
                        </li>
                        <br/>
                        <li>
                             <span className='fw-bold'>Clock Speed: </span>
                            CPUs operate at a specific clock speed, measured in Hertz (Hz) or Gigahertz (GHz).
                            This clock speed determines how many instructions the CPU can execute per second. Higher clock speeds generally mean faster performance.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cores: </span>
                            Modern CPUs often come with multiple cores, which are essentially individual processing units within a single chip.
                            Each core can handle its own set of instructions, allowing for parallel processing and improved multitasking capabilities.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cache Memory: </span>
                             CPUs also feature cache memory, which is a small but ultra-fast memory storage.
                            It temporarily stores frequently accessed data and instructions, reducing the time it takes for the CPU to retrieve information,
                            thus enhancing overall performance.
                        </li>
                    </ul>
                </Card.Text>
                <Card.Title>The CPU's Role in Everyday Computing</Card.Title>
                <Card.Text className='p-2'>
                    Whenever you open an application, browse the web, or even perform simple tasks like typing a document, the CPU is at work.
                    It fetches data from your computer's memory, processes it, and sends the results back to the memory or display.
                    This seamless coordination is what enables you to interact with your computer.
                </Card.Text>
                                <Card.Text className='p-2'>
                    <ul>
                        <li>
                           <span className='fw-bold'>Processing Instructions: </span>
                            The CPU is designed to process a series of instructions stored in the computer's memory.
                            These instructions are typically represented in binary code and include tasks like arithmetic calculations, data movement,
                            and decision-making processes.
                        </li>
                        <br/>
                        <li>
                             <span className='fw-bold'>Clock Speed: </span>
                            CPUs operate at a specific clock speed, measured in Hertz (Hz) or Gigahertz (GHz).
                            This clock speed determines how many instructions the CPU can execute per second. Higher clock speeds generally mean faster performance.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cores: </span>
                            Modern CPUs often come with multiple cores, which are essentially individual processing units within a single chip.
                            Each core can handle its own set of instructions, allowing for parallel processing and improved multitasking capabilities.
                        </li>
                        <br/>
                        <li>
                           <span className='fw-bold'>Cache Memory: </span>
                             CPUs also feature cache memory, which is a small but ultra-fast memory storage.
                            It temporarily stores frequently accessed data and instructions, reducing the time it takes for the CPU to retrieve information,
                            thus enhancing overall performance.
                        </li>
                    </ul>
                </Card.Text>
                <Card.Title>The CPU's Role in Everyday Computing</Card.Title>
                <Card.Text className='p-2'>
                    Whenever you open an application, browse the web, or even perform simple tasks like typing a document, the CPU is at work.
                    It fetches data from your computer's memory, processes it, and sends the results back to the memory or display.
                    This seamless coordination is what enables you to interact with your computer.
                </Card.Text>
                </span>
            </Card.Body>
        </span>
    );
}
